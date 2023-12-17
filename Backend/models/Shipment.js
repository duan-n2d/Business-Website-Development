const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    shipment_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    shipment_cost: {
        type: Number,
        required: true
    },
    discount_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    ship_date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Shipment', ShipmentSchema);