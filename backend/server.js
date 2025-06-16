const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Allowed origins for CORS (update with your actual frontend domains)
const allowedOrigins = [
  'http://localhost:3000',
  'https://mern-app-phi-five.vercel.app',
  'https://mern-app-git-main-venkateshkallus-projects.vercel.app',
  'https://mern-pewwdottk-venkateshkallus-projects.vercel.app'
];

// ✅ CORS middleware configuration
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is working ✅');
});

// ✅ MongoDB connection using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
