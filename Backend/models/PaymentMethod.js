const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
    payment_method_id: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        enum: ['Credit Card', 'Momo', 'Banking', 'COD'],
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    },
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);
