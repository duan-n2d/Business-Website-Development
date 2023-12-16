const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    account_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    is_active: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Account', AccountSchema);