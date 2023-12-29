const mongoose = require('mongoose');

const PostDetailSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    type: {
        enum: ['heading','text', 'image', 'video'],
        type: String,
        required: true,
        default: 'text'
    },
    value: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('PostDetail', PostDetailSchema);