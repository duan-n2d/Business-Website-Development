const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    cart_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
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

module.exports = mongoose.model('CartItem', CartItemSchema);