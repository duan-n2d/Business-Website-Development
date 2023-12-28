const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Account = require("../models/Account");
const User = require("../models/User");

const loginController = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });

    try {
        const account = await Account.findOne({ username });
        if (!account)
            return res
            .status(400)
            .json({ success: false, message: "Incorrect username or password" });

        const passwordValid = await argon2.verify(account.password, password);
        if (!passwordValid)
            return res
            .status(400)
            .json({ success: false, message: "Incorrect username or password" });

        const accessToken = jwt.sign(
            { account_id: account._id },
            process.env.ACCESS_TOKEN_SECRET
        );

        const user = await User.findOne({ user_id: account.user_id });

        res.json({
            success: true,
            message: "Login successfully",
            accessToken,
            role: user.role,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const registerController = async (req, res) => {
    const { first_name, last_name, email, phone_number, password, role} = req.body;

    const numberInUserId = await User.countDocuments() + 1;

    const user_id = "GU" + numberInUserId.toString().padStart(4, "0");

    if (!first_name || !last_name || !email || !phone_number || !password)
        return res
        .status(400)
        .json({ success: false, message: "Missing information" });
    
    try {
        const emailUser = await User.findOne({ email });
        if (emailUser)
            return res
            .status(400)
            .json({ success: false, message: "Email already taken" });

        const phoneUser = await User.findOne({ phone_number });
        if (phoneUser)
            return res
            .status(400)
            .json({ success: false, message: "Phone number already taken" });

        if (role !== "admin" && role !== "user")
            return res
            .status(400)
            .json({ success: false, message: "Role must be admin or user" });

        const hashedPassword = await argon2.hash(password);
        const newAccountWithEmail = new Account({ user_id, username: email, password: hashedPassword});
        await newAccountWithEmail.save();

        const newAccountWithPhone = new Account({ user_id, username: phone_number, password: hashedPassword});
        await newAccountWithPhone.save();

        const newUser = new User({ user_id: user_id, first_name: first_name, last_name: last_name, email: email, phone_number: phone_number, role: role});
        await newUser.save();

        res.json({ success: true, message: "Register successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const logoutController = async (req, res) => {
    res.json({ success: true, message: "Logout successfully" });
};

const forgotPasswordController = async (req, res) => {
    const { email } = req.body;

    if (!email)
        return res
        .status(400)
        .json({ success: false, message: "Missing email" });

    try {
        const account = Account.findOne({ email });
        if (!account)
            return res
            .status(400)
            .json({ success: false, message: "Email does not exist" });
        
        return res.json({ success: true, message: "Reset password successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    loginController,
    registerController,
    logoutController,
    forgotPasswordController
};