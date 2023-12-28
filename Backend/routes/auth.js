const express = require('express')
const router = express.Router()

const { loginController, registerController, forgotPasswordController} = require('../controllers/AccountController')
const { getAllUserController, updateUserController, getUserByIdController, deleteUserController } = require('../controllers/UserController')
const { getAllProducts, getProductById, addProduct } = require('../controllers/ProductController')
const { getAllDiscountController, createDiscountController, updateDiscountController, deleteDiscountController } = require('../controllers/DiscountController')
const { getAllBrands, getBrandActive, addBrand, updateBrand, deleteBrand } = require('../controllers/BrandController')

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
router.get('/product/:id', getProductById)
router.post('/add-product', addProduct)

// Discount
router.get('/discounts', getAllDiscountController)
router.post('/create-discounts', createDiscountController)
router.put('/update-discounts', updateDiscountController)
router.delete('/delete-discounts', deleteDiscountController)

// Brand
router.get('/brands', getAllBrands)
router.get('/brands-active', getBrandActive)
router.post('/add-brand', addBrand)
router.put('/update-brand', updateBrand)
router.patch('/delete-brand', deleteBrand)



module.exports = router