const axios = require('axios');
const Transaction = require('../models/Transaction');

const seedDatabase = async (req, res) => {
  try {
    // Fetch data from the third-party API
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

    // Remove all existing data
    await Transaction.deleteMany();

    // Insert fetched data
    await Transaction.insertMany(data);

    res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Error seeding database:', error.message);
    res.status(500).json({ message: 'Failed to seed database', error: error.message });
  }
};

module.exports = { seedDatabase };
