const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
        // Cái này là primary key
    },
    product_name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    quantity_in_stock: {
        type: Number,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    selling_price: {
        type: Number,
        required: true
    },
    brand_id: {
        type: String,
        required: true
    },
    category_id:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
