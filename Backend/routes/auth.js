const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const { loginController, registerController, forgotPasswordController} = require('../controllers/AccountController')
const { getAllUserController, updateUserController, getUserByIdController, deleteUserController } = require('../controllers/UserController')
const { getAllProducts } = require('../controllers/ProductController')
const { getAllDiscountController, createDiscountController, updateDiscountController, deleteDiscountController } = require('../controllers/DiscountController')

// Account
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/forgot-password', forgotPasswordController)
router.patch('/delete-user', deleteUserController)

// User
router.get('/users', getAllUserController)
router.get('/user/:id', getUserByIdController)
router.put('/update-users', updateUserController)

// Product
router.get('/products', getAllProducts)

// Discount
router.get('/discounts', getAllDiscountController)
router.post('/create-discounts', createDiscountController)
router.put('/update-discounts', updateDiscountController)
router.delete('/delete-discounts', deleteDiscountController)

module.exports = router