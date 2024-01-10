const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { verifyToken, isAdmin } = require('../middleware/auth')

const { loginController,
    registerController,
    logoutController,
    forgotPasswordController} = require('../controllers/AccountController')
const { getAllBrands,
    getBrandActive,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand } = require('../controllers/BrandController')
const { getCartByUserId,
    getCartById,
    createCartItem } = require('../controllers/CartController')
const { getAllCategories,
    getCategoryById,
    createCategory } = require('../controllers/CategoryController')
const { getAllDiscountController,
    getAllDiscountActive,
    getDiscountById,
    createDiscountController,
    updateDiscountController,
    deleteDiscountController } = require('../controllers/DiscountController')
const { getAllOrders,
    getOrderById,
    getOrdersByUserId,
    getOrdersByShipmentId,
    getOrderLinesByOrderId,
    getOrderLineById,
    createOrder,
    updateOrder,
    getInvoices,
    getInvoiceById,
    getInvoicesByOrderId,
    getShipmentByOrderId,
    getShipmentById,
    updateShipment } = require('../controllers/OrderController')
const { getAllPaymentMethods, 
    createPaymentMethod } = require('../controllers/PaymentMethodController')
const { getAllPosts,
    getPostById,
    getPostsByAdminId,
    createPost,
    updatePost } = require('../controllers/PostController')
const { getAllProducts,
    getProductActive,
    getProductById,
    getProductByCategoryId,
    getProductByBrandId,
    addProduct,
    updateProduct,
    deleteProduct,
    getImagesByProductId,
    getCategoriesOfProduct } = require('../controllers/ProductController')
const { getAllReviewsByProductId,
    getAllReviewsByUserId,
    getReviewById,
    createReview,
    deleteReview } = require('../controllers/ReviewController')
const { getAllUserController,
    updateUserController,
    getUserByIdController,
    deleteUserController } = require('../controllers/userController')

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user)
            return res.status(400).json({ success: false, message: 'User not found' })
        res.json({ success: true, user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})


// Account
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/forgot-password', forgotPasswordController)
router.patch('/delete-user', deleteUserController)

// Brand
router.get('/brands', getAllBrands)
router.get('/brandS-active', getBrandActive)
router.get('/brand', getBrandById)
router.post('/add-brand', addBrand)
router.put('/update-brand', updateBrand)
router.patch('/delete-brand', deleteBrand)

// Cart
router.get('/cart-by-user', getCartByUserId)
router.get('/cart', getCartById)
router.post('/create-cart-item', createCartItem)

// Category
router.get('/categories', getAllCategories)
router.get('/category', getCategoryById)
router.post('/create-category', createCategory)

// Discount
router.get('/discounts', getAllDiscountController)
router.get('/discounts-active', getAllDiscountActive)
router.get('/discount', getDiscountById)
router.post('/create-discount', createDiscountController)
router.put('/update-discount', updateDiscountController)
router.patch('/delete-discount', deleteDiscountController)

// Order
router.get('/orders', getAllOrders)
router.get('/order', getOrderById)
router.get('/orders-by-user', getOrdersByUserId)
router.get('/orders-by-shipment', getOrdersByShipmentId)
router.get('/order-lines-by-order', getOrderLinesByOrderId)
router.get('/order-line', getOrderLineById)
router.post('/create-order', createOrder)
router.put('/update-order', updateOrder)
router.get('/invoices', getInvoices)
router.get('/invoice', getInvoiceById)
router.get('/invoices-by-order', getInvoicesByOrderId)
router.get('/shipment-by-order', getShipmentByOrderId)
router.get('/shipment', getShipmentById)
router.put('/update-shipment', updateShipment)

// Payment Method
router.get('/payment-methods', getAllPaymentMethods)
router.post('/create-payment-method', createPaymentMethod)

// Post
router.get('/posts', getAllPosts)
router.get('/post', getPostById)
router.get('/posts-by-admin', getPostsByAdminId)
router.post('/create-post', createPost)
router.put('/update-post', updatePost)

// User
router.get('/users', getAllUserController)
router.get('/user/:id', getUserByIdController)
router.put('/update-users', updateUserController)

// Product
router.get('/products', getAllProducts)
router.get('/product/:id', getProductById)
router.post('/add-product', addProduct)
router.put('/update-product', updateProduct)
router.patch('/delete-product', deleteProduct)
router.get('/products-active', getProductActive)
router.get('/products-by-category/:id', getProductByCategoryId)
router.get('/products-by-brand/:id', getProductByBrandId)
router.get('/product/:id/img', getImagesByProductId)
router.get('/product/:id/categories', getCategoriesOfProduct)

// Review
router.get('/reviews-by-product', getAllReviewsByProductId)
router.get('/reviews-by-user', getAllReviewsByUserId)
router.get('/review', getReviewById)
router.post('/create-review', createReview)
router.patch('/delete-review', deleteReview)

module.exports = router
