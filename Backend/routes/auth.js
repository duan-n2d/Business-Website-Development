const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const User = require('../models/User')
const { registerController, loginController, logoutController, getUserController, forgotPasswordController } = require('../controllers/userController')

// @route GET api/auth
// @desc secure routing auth
// @access Public
// router.get('/user-auth', verifyToken)

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', registerController)

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', loginController)

// @route POST api/auth/logout
// @desc Logout user
// @access Public
router.get('/logout', logoutController)

// @route POST api/auth/forgot-password
// @desc Forgot password
// @access Public
router.post('/forgot-password', forgotPasswordController)

// @route GET api/auth/get-user-by-id
// @desc Get user by ID
// @access Public
router.get('/get-user-by-id', getUserController)

module.exports = router