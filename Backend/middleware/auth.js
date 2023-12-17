const jwt = require('jsonwebtoken')
const User = require('../models/User')

const verifyToken = (req, res, next) => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]

	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Access token not found' })

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

		req.userId = decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}

const isAdmin = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId)

		if (user.role === 'admin') next()
		else
			return res
				.status(401)
				.send({ success: false, message: 'Admin resources access denied' });
	}
	catch (error) {
		console.log(error)
		return res
			.status(500)
			.send({ success: false, message: 'Internal server error' })
	}
}

module.exports = {
	verifyToken,
	isAdmin
}