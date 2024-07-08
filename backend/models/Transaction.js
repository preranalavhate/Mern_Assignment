const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  price: Number,
  dateOfSale: String,
  category: String,
  sold: Boolean
});

module.exports = mongoose.model('Transaction', transactionSchema);
