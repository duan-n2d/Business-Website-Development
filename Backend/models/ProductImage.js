const mongoose = require('mongoose');

const ProductImageSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        validate: {
            validator: function(value) {
                // Sử dụng biểu thức chính quy để kiểm tra tính hợp lệ của URL
                const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                return urlPattern.test(value);
            },
            message: 'Invalid URL format'
        },
        required: true
    },
    numerical_order: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    is_created: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProductImage', ProductImageSchema);