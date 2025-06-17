const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // ✅ Only keep this one
require('dotenv').config();

const app = express(); // ✅ This must be declared BEFORE using `app`

// ✅ Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000',
  'https://mern-app-phi-five.vercel.app',
  'https://mern-app-git-main-venkateshkallus-projects.vercel.app',
  'https://mern-pewwdottk-venkateshkallus-projects.vercel.app'
];

// ✅ Middleware
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

// ✅ Routes
app.get('/', (req, res) => res.send('API is working ✅'));
app.use('/api/products', productRoutes); // ✅ Use the imported routes here

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
