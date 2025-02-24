const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String, 
    description: String,
    price: Number,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    stock: Number,
    images: [String],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
    viewcount: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);