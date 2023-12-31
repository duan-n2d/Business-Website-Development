require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')

const MongoDB_URL = `mongodb+srv://admin-gakki:admin-gakki-web@gakki-web.st5ovit.mongodb.net/gakki-database?retryWrites=true&w=majority`

const connectDB = async () => {
	try {
		await mongoose.connect(MongoDB_URL,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))