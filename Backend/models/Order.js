const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    customer:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    total_price:{
        type: Number,
        required: true
    },
    shipment_id: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);
