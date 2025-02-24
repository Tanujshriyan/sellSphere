const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    address: [{
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    }],
    role:{
        type: String,
        default: 'customer',
        enum: ['customer', 'admin', 'seller'],
    },
    avatar: String,
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    viewHistory: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        viewedAt: {type: Date, default: Date.now}
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);