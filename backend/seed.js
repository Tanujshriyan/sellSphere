require('dotenv').config()
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const Brand = require('./models/Brand');
const Order = require('./models/Order');
const Review = require('./models/Review');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log(`Connected to ${process.env.MONGO_URI}`);
}).catch((err) => {
  console.log(err);
});  
 
// Sample Data
const seedUsers = [
    { name: 'John Doe', email: 'john@example.com', password: 'hashedpassword123', role: 'customer' },
    { name: 'Admin User', email: 'admin@example.com', password: 'hashedpassword123', role: 'admin' },
  ];
  
  const seedProducts = [
    { name: 'Laptop', description: 'A high-performance laptop', price: 1200, stock: 10, images: [] },
    { name: 'Phone', description: 'A powerful smartphone', price: 800, stock: 15, images: [] },
];

// Function to seed data
const seedDatabase = async () => {
    try {
        // Delete existing data
        await User.deleteMany();
        await Product.deleteMany();
        await Brand.deleteMany();
        await Order.deleteMany();
        await Review.deleteMany();
        
        // Insert data
        await User.insertMany(seedUsers);
        await Product.insertMany(seedProducts);
        
        console.log('Data Seeded Successfully');
    } catch (error) {
        console.log(error);
    }
}