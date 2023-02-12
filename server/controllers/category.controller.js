const Category = require('../models/category.model');

exports.categoryCountController = async (req, res) => {
    try {
        const orderCount = await Category.countDocuments();
        res.json(orderCount);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.categoryList5Controller = async (req, res) => {
    try {
        const orders = await Category.find().sort({ _id: -1 }).limit(5);
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};