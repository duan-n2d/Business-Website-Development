const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
        // Cái này là primary key
    },
    customer_id:{
        type: String,
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

module.exports = mongoose.model('User', UserSchema);
