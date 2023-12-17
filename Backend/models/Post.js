const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    admin_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    }
});

module.exports = mongoose.model('Post', PostSchema);