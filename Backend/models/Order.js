const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    shipment_id: {
        type: String,
        required: true
    },
    discount_id: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    total_price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);
