const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Account = require("../models/Account");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const Cart = require("../models/Cart");

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

        const user = await User.findOne({ user_id: account.user_id });

        const accessToken = jwt.sign(
            { user_id: account.user_id }, // Sử dụng user_id thay vì account_id
            {role: user.role},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h"},
            { algorithm: "HS256"},
        );

        res.json({
            success: true,
            message: "Login successfully",
            accessToken,
            role: user.role,
            user_id: user.user_id,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const registerController = async (req, res) => {
    const { first_name, last_name, email, phone_number, password, role } = req.body;

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
        const newAccountWithEmail = new Account({ user_id, username: email, password: hashedPassword });
        await newAccountWithEmail.save();

        const newAccountWithPhone = new Account({ user_id, username: phone_number, password: hashedPassword });
        await newAccountWithPhone.save();

        const newUser = new User({ user_id, first_name, last_name, email, phone_number, role });
        await newUser.save();

        const newCart = new Cart({ cart_id: uuidv4(), user_id, products: [] });
        await newCart.save();

        res.json({ success: true, message: "Register successfully" });
    }
    catch (error) {
        console.error(error);
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
        const account = await Account.findOne({ email });
        if (!account)
            return res
                .status(400)
                .json({ success: false, message: "Email does not exist" });

        return res.json({ success: true, message: "Reset password successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    loginController,
    registerController,
    logoutController,
    forgotPasswordController
};