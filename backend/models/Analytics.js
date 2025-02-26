const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    eventType: {
        type: String,
        required: true,
        enum: ['product_view', 'product_add', 'product_purchase', 'product_search', 'product_view'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    
    timestamp: {
        type: Date,
        default: Date.now,
    },
}, {timestamp: false});


// Index for better search performance
analyticsSchema.index({eventType: 1, timestamp: 1});
analyticsSchema.index({user: 1, timestamp: 1})
analyticsSchema.index({product: 1, timestamp: 1});

module.exports = mongoose.model('Analytics', analyticsSchema);
