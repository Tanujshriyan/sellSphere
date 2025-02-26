const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
    }],
    paymentIntent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    }],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    status: {
        type: String,
        default: 'Not processed',
        enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    },
    totalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);