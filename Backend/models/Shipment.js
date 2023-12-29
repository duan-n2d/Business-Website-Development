const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    shipment_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    address: {
        type: Object,
        required: true
    },
    shipment_cost: {
        type: Number,
        required: true,
        default: 50000
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    ship_date: {
        type: Date,
        required: true
    },
    delivered_date: {
        type: Date,
        required: false
    },
    cancelled_date: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Shipment', ShipmentSchema);