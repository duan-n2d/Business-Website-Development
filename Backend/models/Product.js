const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    quantity_in_stock: {
        type: Number,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    selling_price: {
        type: Number,
        required: true
    },
    brand_id: {
        type: String,
        required: true
    },
    category_id:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);
