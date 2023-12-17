const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
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
    email_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: 'Vietnam',
        required: true
    },
    role: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    // username: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },

});

module.exports = mongoose.model('User', UserSchema);
