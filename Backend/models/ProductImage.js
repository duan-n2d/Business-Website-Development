const mongoose = require('mongoose');

const ProductImageSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    numerical_order: {
        type: Number,
        required: true,
        unique: true
    },
    is_created: {
        type: Boolean,
        default: true,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProductImage', ProductImageSchema);