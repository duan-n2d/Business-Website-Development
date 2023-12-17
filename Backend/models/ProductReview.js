const mongoose = require('mongoose');

const ProductReviewSchema = new mongoose.Schema({
    review_id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    product_id: {
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

module.exports = mongoose.model('ProductReview', ProductReviewSchema);