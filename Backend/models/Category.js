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
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', CategorySchema);