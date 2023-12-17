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
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);