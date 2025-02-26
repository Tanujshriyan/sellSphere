const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
    }, 
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
    views: {
        type: Number,
        default: 0,
    },
    salesCount: {
        type: Number,
        default: 0,
    },
    cartAdds: {
        type: Number,
        default: 0,
    },
    searchKeywords: [String],
    status: {
        type: String,
        default: 'pending',
        enum: ['active', 'inactive', 'pending', 'draft'],
    },
}, { timestamps: true });

// Index for better search performance
productSchema.index({
    name: 'text',
    description: 'text',
    searchKeywords: 'text',
});

module.exports = mongoose.model('Product', productSchema);