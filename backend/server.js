const express = require('express');
const connectDB = require('./config/db');
const seedRouter = require('./routes/seedRoute');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/seed', seedRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
