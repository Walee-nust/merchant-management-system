const Order = require('../models/order.model');

exports.orderCountController = async (req, res) => {
    try {
        const orderCount = await Order.countDocuments();
        res.json(orderCount);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.orderList5Controller = async (req, res) => {
    try {
        const orders = await Order.find().sort({ _id: -1 }).limit(5);
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};