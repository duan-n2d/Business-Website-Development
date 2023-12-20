const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brand_id: {
        type: String,
        required: true
    },
    brand_name: {
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

module.exports = mongoose.model('Brand', BrandSchema);