const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
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
        type: Object,
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
        required: true,
        min: 1,
        max: 5,
        default: 5
    },
    discount_id: {
        type: Array,
        required: false
    },
    total_sold: {
        type: Number,
        required: true,
        default: 0
    },
    total_rating: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);
