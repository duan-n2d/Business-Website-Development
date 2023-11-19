const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    customer_id: {
        type: Number,
        required: true,
        // Cái này là primary key
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('User', UserSchema);
