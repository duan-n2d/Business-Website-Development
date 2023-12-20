const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Account = require("../models/Account");

//API
const getAllUserController = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500)
    .json({ success: false, message: "Internal server error" });
  }
}

const updateUserController = async (req, res) => {
    const { first_name, last_name, email, phone_number, address, city, country } = req.body;

    if (!first_name || !last_name || !email || !phone_number || !address || !city || !country)
        return res
        .status(400)
        .json({ success: false, message: "Missing information" });
    
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.userId },
            { first_name, last_name, email, phone_number, address, city, country },
            { new: true }
        );
        if (!user)
            return res
            .status(400)
            .json({ success: false, message: "User not found" });
        res.json({ success: true, message: "Update successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
  getAllUserController,
  updateUserController
}