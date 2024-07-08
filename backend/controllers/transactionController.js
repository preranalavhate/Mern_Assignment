const Transaction = require('../models/Transaction');

const listTransactions = async (req, res) => {
  const { page = 1, perPage = 10, search = '' } = req.query;
  const query = {
    $or: [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') },
      { price: new RegExp(search, 'i') },
    ],
  };
  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    const count = await Transaction.countDocuments(query);
    res.status(200).json({ transactions, count });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

module.exports = {
  listTransactions,
};
