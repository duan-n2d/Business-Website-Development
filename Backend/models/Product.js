const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    is_active: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    },
    product_name: {
        type: String,
        required: true
    },
    product_description:{
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true
    },
    brand_id:{
        type: String,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    current_price: {
        type: Number,
        required: true
    },
    quantity_in_stock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 1, // Đánh giá tối thiểu
        max: 5, // Đánh giá tối đa
        default: 0 // Giá trị mặc định
    },
    discount_id: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);
