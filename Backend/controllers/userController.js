const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
// const passport = require("passport");
const User = require("../models/User");

//API
const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  try {
    const user = await User.findOne({ username });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });

    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const forgotPasswordController = async (req, res) => {
  // forgot password
}

const registerController = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password)
        return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });
    
    try {
        const user = await User.findOne({ username });
    
        if (user)
        return res
            .status(400)
            .json({ success: false, message: "Username already taken" });
    
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
    
        const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN_SECRET
        );
    
        res.json({
        success: true,
        message: "User created successfully",
        accessToken,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const logoutController = async (req, res) => {
    req.logout();
    res.json({ success: true, message: "User logged out successfully" });
}

const getUserController = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user)
        return res
              .status(400)
              .json({ success: false, message: "User not found" });
        res.json({ success: true, user });
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    loginController,
    registerController,
    logoutController,
    getUserController,
    forgotPasswordController
}