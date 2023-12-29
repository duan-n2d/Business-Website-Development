const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    discount_id: {
        type: String,
        required: true
    },
    discount_name: {
        type: String,
        required: true
    },
    type_discount: {
        type: String,
        enum: ['Percentage', 'Fixed Amount'],
        default: 'Percentage'
    },
    quantity: {
        type: Number,
        required: true,
    },
    discount_value: {
        type: Number,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = mongoose.model('Discount', DiscountSchema);