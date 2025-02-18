const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    method: {
        type: String,
        enum: ['credit_card', 'paypal', 'stripe'],
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'completed', 'failed'],
    },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);