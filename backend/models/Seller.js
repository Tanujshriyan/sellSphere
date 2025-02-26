const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    businessName: {
        type: String,
        required: [true, 'Please enter business name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please enter business description'],
        trim: true,
    },
    logo: {
        type: String,
        required: [true, 'Please upload business logo'],
    },
    banner: {
        type: String,
        required: [true, 'Please upload business banner'],
    },
    businessEmail:{
        type: String,
        required: [true, 'Please enter business email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please enter business phone number'],
    },
    address: {
        street: {
            type: String,
            required: [true, 'Please enter street address'],
            trim: true,
        },
        city: {
            type: String,
            required: [true, 'Please enter city'],
            trim: true,
        },
        state: {
            type: String,
            required: [true, 'Please enter state'],
            trim: true,
        },
        country: {
            type: String,
            required: [true, 'Please enter country'],
            trim: true,
        },
        postalCode: {
            type: String,
            required: [true, 'Please enter postal code'],
            trim: true,
        },
    },
    bankInfo: {
        bankName: {
            type: String,
            required: [true, 'Please enter bank name'],
            trim: true,
        },
        accountName: {
            type: String,
            required: [true, 'Please enter account name'],
            trim: true,
        },
        accountNumber: {
            type: String,
            required: [true, 'Please enter account number'],
            trim: true,
        },
        branchcode: {
            type: String,
            required: [true, 'Please enter branch code'],
            trim: true,
        },
        swiftcode: {
            type: String,
            required: [true, 'Please enter swift code'],
            trim: true,
        },
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationDocument: [{
        type: String,
        description: String,
    }],
    taxIdenficationNumber: {
        type: String,
    },
    // Store settings and policies
    storePolicies: {
        returnPolicy: String,
        refundPolicy: String,
        shippingPolicy: String,
        privacyPolicy: String,
        cancellationPolicy: String,
    },
    // Store Status
    status: {
        type: String,
        default: 'pending',
        enum: ['active', 'inactive', 'pending', 'rejected'],
    },
    // Store analytics
    metrics: {
        totalSales: {
            type: Number,
            default: 0,
        },
        totalProducts: {
            type: Number,
            default: 0,
        },
        totalOrders: {
            type: Number,
            default: 0,
        },
        totalCustomers: {
            type: Number,
            default: 0,
        },
        totalViews: {
            type: Number,
            default: 0,
        },
        totalAdds: {
            type: Number,
            default: 0,
        },
        averageRating: {
            type: Number,
            default: 0,
        },
        fulfillmentRate: {
            type: Number,
            default: 0,
        },
        cancellationrRate:{
            type: Number,
            default: 0, 
        },
        returnRate: {
            type: Number,
            default: 0,
        },
        averageResponseTime: {
            type: Number,
            default: 0,
        },
    },
    joinDate: {
        type: Date,
        default: Date.now,
    },
    lastActiveDate: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

sellerSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'seller',
    justOne: false,
});

module.exports = mongoose.model('Seller', sellerSchema);