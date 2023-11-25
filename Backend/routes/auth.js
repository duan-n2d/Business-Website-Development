const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')

//try-catch when work with database

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

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
	const {
		customer_id,
		username,
		password,
		first_name,
		last_name,
		email,
		phone_number,
		address,
	  } = req.body;

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
		const user = await User.findOne({ username })

		if (user)
			return res
				.status(400)
				.json({ success: false, message: 'Username already taken' })

		// Hash password
		const hashedPassword = await argon2.hash(password)
		const newUser = new User({
			customer_id,
			username,
			password: hashedPassword ,
			first_name,
			last_name,
			email,
			phone_number,
			address,
		  });
		await newUser.save()

		// Return token
		const accessToken = jwt.sign(
			{ userId: newUser._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'User created successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
	const { username, password } = req.body

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
		const user = await User.findOne({ username })
		if (!user)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// Username found
		const passwordValid = await argon2.verify(user.password, password)
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// All good
		// Return token
		const accessToken = jwt.sign(
			{ userId: user._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'User logged in successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// Create Product
// @route POST api/auth/create-product
// @desc Create Product
// @access Public
router.post('/create-product', async (req, res) => {
	const {
		product_id,
		product_name,
		description,
		quantity_in_stock,
		purchase_price,
		selling_price,
		brand_id,
		category_id
	  } = req.body;

	// Simple validation
	if (!product_id || !product_name)
		return res
			.status(400)
			.json({ success: false, message: 'Missing product_id and/or product_name' })

	try {
		// Check for existing product
		const product = await Product.findOne({ product_id })

		if (product)
			return res
				.status(400)
				.json({ success: false, message: 'Product already taken' })

		const newProduct = new Product({
			product_id,
			product_name,
			description,
			quantity_in_stock,
			purchase_price,
			selling_price,
			brand_id,
			category_id
		  });
		await newProduct.save()

		// Return token
		const accessToken = jwt.sign(
			{ productId: newProduct._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'Product created successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error '+ error})
	}
})

// Create Order
// @route POST api/auth/create-order
// @desc Create Order
// @access Public
router.post('/create-order', async (req, res) => {
	const {
		order_id,
		customer_id,
		order_date,
		order_status,
		order_total
	  } = req.body;

	// Simple validation
	if (!order_id || !customer_id)
		return res
			.status(400)
			.json({ success: false, message: 'Missing order_id and/or customer_id' })

	try {
		// Check for existing order
		const order = await Order.findOne({ order_id })

		if (order)
			return res
				.status(400)
				.json({ success: false, message: 'Order already taken' })

		const newOrder = new Order({
			order_id,
			customer_id,
			order_date,
			order_status,
			order_total
		  });
		await newOrder.save()

		// Return token
		const accessToken = jwt.sign(
			{ orderId: newOrder._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'Order created successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error '+ error})
	}
})

module.exports = router