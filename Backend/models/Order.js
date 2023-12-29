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
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
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
    },
    // shipment_id: {
    //     type: String,
    //     required: true
    // },
    // payment_method: {
    //     type: String,
    //     required: true
    // }
});

module.exports = mongoose.model('Order', OrderSchema);
