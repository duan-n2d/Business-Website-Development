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
    value: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('PostDetail', PostDetailSchema);