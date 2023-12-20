const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    cart_id: {
        type: String,
        required: true
    },
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Cart', CartSchema);