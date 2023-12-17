const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        // Cái này là primary key
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
        type: String,
        enum: ['yes', 'no'],
        default: 'no' // Giá trị mặc định chưa được verified
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
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
