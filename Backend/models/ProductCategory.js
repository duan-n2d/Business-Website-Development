const mongoose = require('mongoose');

const ProductCategorySchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);