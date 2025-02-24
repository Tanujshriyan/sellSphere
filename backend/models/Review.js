const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    comment: String,
}, { timestamps: true });