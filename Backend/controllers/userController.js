const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Account = require("../models/Account");
const User = require("../models/User");

//API
const getAllUserController = async (req, res) => {
  try {
    const users = await User.find({is_active:true, role: "user"});

    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500)
    .json({ success: false, message: "Internal server error" });
  }
}

const getUserByIdController = async (req, res) => {
  const user_id = req.params.id;
  const user = await User.findOne({ user_id: user_id });
  try {
    if (!user)
      return res
      .status(400)
      .json({ success: false, message: "User not found"});
  }
  catch (error) {
    console.log(error);
    res.status(500)
    .json({ success: false, message: "Internal server error" });
  }
  
  res.json({ success: true, user_id: user_id, role: user.role });
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

const deleteUserController = async (req, res) => {
  // only change is_active to false
  const { user_id } = req.body;

  if (!user_id)
      return res
      .status(400)
      .json({ success: false, message: "Missing user_id" });
  
  try {
      const user = await User.findOne({ user_id: user_id });
      if (!user)
          return res
          .status(400)
          .json({ success: false, message: "User not found" });
      
      user.is_active = false;

      const accounts = await Account.find({ user_id: user_id });

      if (!accounts)
          return res
          .status(400)
          .json({ success: false, message: "Account not found" });
      
      for (let i = 0; i < accounts.length; i++) {
        accounts[i].is_active = false;
        await accounts[i].save();
      }
    
      await user.save();

      res.json({ success: true, message: "Delete user successfully" });
  }
  catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
  }
}


module.exports = {
  getAllUserController,
  updateUserController,
  getUserByIdController,
  deleteUserController
}