const Store = require('../model/Store');

// GET ALL STORES
// @route is GET /api/v1/stores
// @access PUBLIC
exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: 'server error'
    });
  }
};

// Add a store
// @route is POST  /api/v1/stores
// @access PUBLIC
exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json({
      success: true,
      data: store
    });
  } catch (e) {
    console.log(e);

    if (e.code === 11000) {
      return res.status(400).json({
        error: 'This store already exists'
      });
    }

    res.status(500).json({
      error: 'server error'
    });
  }
};
