const mongoose = require('mongoose');

const OrderLineSchema = new mongoose.Schema({
    order_line_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Orderline', OrderLineSchema);