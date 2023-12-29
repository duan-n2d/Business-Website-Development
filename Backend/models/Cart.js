const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    cart_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cart', CartSchema);