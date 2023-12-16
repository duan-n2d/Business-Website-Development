const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
    payment_method_id: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash'],
        default: 'Credit Card'
    },
    is_active: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes' // Giá trị mặc định nếu không có giá trị được cung cấp
    }
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);
