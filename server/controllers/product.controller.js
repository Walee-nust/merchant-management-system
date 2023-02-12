const Product = require('../models/product.model');

exports.productCountController = async (req, res) => {
    try {
        const orderCount = await Product.countDocuments();
        res.json(orderCount);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.productList5Controller = async (req, res) => {
    try {
        const orders = await Product.find().sort({ _id: -1 }).limit(5);
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};