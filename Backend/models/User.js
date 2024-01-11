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
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    dob: {
        type: Date,
    },
    role: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
