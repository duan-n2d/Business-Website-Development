const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    invoice_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    payment_method_id:{
        type: String,
        required: true
    },
    shipment_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    payment_at: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Draft', 'Sent', 'Paid', 'Cancelled'],
        default: 'Draft',
        required: true
    }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
