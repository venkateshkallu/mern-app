const mongoose = require('mongoose');
const Product = require('./models/Product'); // adjust if your path differs
require('dotenv').config();

const products = [
  {
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 40 hours of playtime",
    price: 129.99,
    image: "https://via.placeholder.com/200?text=Headphones"
  },
  {
    title: "Smart Watch",
    description: "Track your fitness and health with this stylish smartwatch",
    price: 89.99,
    image: "https://via.placeholder.com/200?text=Watch"
  },
  {
    title: "Backpack",
    description: "Waterproof backpack perfect for travel or work",
    price: 49.99,
    image: "https://via.placeholder.com/200?text=Backpack"
  },
  {
    title: "Sunglasses",
    description: "UV-protected polarized sunglasses",
    price: 25.00,
    image: "https://via.placeholder.com/200?text=Sunglasses"
  },
  {
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with 7 programmable buttons",
    price: 39.99,
    image: "https://via.placeholder.com/200?text=Gaming+Mouse"
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.insertMany(products);
  })
  .then(() => {
    console.log("🌟 Products added");
    process.exit();
  })
  .catch(err => console.error(err));
