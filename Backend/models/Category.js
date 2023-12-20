const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true
    },
    category_name: {
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

module.exports = mongoose.model('Category', CategorySchema);