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
  
  res.json({ success: true, user: user });
}

const updateUserController = async (req, res) => {
  const { user_id, name, email, dob, phone_number, address, city, country} = req.body;
  if (!user_id)
      return res
      .status(400)
      .json({ success: false, message: "Missing user_id" });
  
  if (!name)
      return res
      .status(400)
      .json({ success: false, message: "Missing name" });
    
  if (!email)
      return res
      .status(400)
      .json({ success: false, message: "Missing email" });

  if (!phone_number)
      return res
      .status(400)
      .json({ success: false, message: "Missing phone_number" });

  if (!password)
      return res
      .status(400)
      .json({ success: false, message: "Missing password" });

  try {
    const user = await User.findOne({ user_id: user_id });
    if (!user)
      return res
      .status(400)
      .json({ success: false, message: "User not found" });

    const first_name = name.split(" ").slice(0, -1).join(" ");
    const last_name = name.split(" ").slice(-1).join(" ");
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.dob = dob;
    user.phone_number = phone_number;
    user.address = address;
    user.city = city;
    user.country = country;

    const accounts = await Account.find({ user_id: user_id });
    if (!accounts)
      return res
      .status(400)
      .json({ success: false, message: "Account not found" });

    accounts[0].username = email;
    passwordHash = await argon2.hash(password);
    accounts[0].password = passwordHash;
    await accounts[0].save();

    accounts[1].username = phone_number;
    passwordHash = await argon2.hash(password);
    accounts[1].password = passwordHash;
    await accounts[1].save();

    await user.save();

    res.json({ success: true, message: "Update user successfully" });
  } catch (error) {
    console.log(error);
    res.status(500)
    .json({ success: false, message: "Internal server error" });
  }
}

const deleteUserController = async (req, res) => {
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