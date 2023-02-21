const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const orderModel = require('../models/order.model');
const invoiceModel = require('../models/invoice.model');
const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model');

// get list of all orders of all the users
exports.getAllOrders = async (req, res) => {
    all_orders = await orderModel.find({})
    res.json(all_orders)
}

// get all invoices of a specific order
exports.getOrderInvoices = async (req, res) => {
    all_orders = await invoiceModel.find({ order_id: ObjectId(req.params.order_id) })

    // replace product_id with product_name
    for (o of all_orders) {
        productData = await productModel.find({ _id: o.product_id })
        o.product_id = productData[0].name
    }

    res.json(all_orders)
}

// delete a specific invoice
exports.deleteInvoice = async (req, res) => {
    console.log(req.params.invoice_id)
    await invoiceModel.find({ _id: req.params.invoice_id }).deleteOne().exec()
    res.json("deleted invoice")
}

// add order of a user. Receives user_id, shipping_address, and status
exports.addOrder = async (req, res) => {
    total_cost = 0
    costArr = []
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const currentDateString = currentDate.toLocaleString('en-US', options);

    products = await cartModel.find({ user_id: ObjectId(req.body.user_id) })
    for (p of products) {
        productData = await productModel.find({ _id: p.product_id })
        cost = productData[0].price
        total_cost += (cost * p.quantity)
        costArr.push(cost)
    }
    newOrder = new orderModel({ user_name: req.body.user_id, shipping_address: req.body.shipping_address, cost: total_cost, status: req.body.status, date: currentDateString })
    o = await newOrder.save()
    count = 0
    for (p of products) {
        invoice = new invoiceModel({ order_id: o._id, product_id: p.product_id, quantity: p.quantity, cost: costArr[count] })
        await invoice.save()
        count += 1
    }
    res.json(o)
}

// delete an order and all its invoices when the order_id is given
exports.deleteOrder = async (req, res) => {
    await orderModel.find({ _id: req.params.order_id }).deleteOne().exec()
    await invoiceModel.find({ order_id: req.params.order_id }).deleteMany().exec()
    res.json("deleted order")
}

// update the orderAddress of an order
exports.updateOrderAddress = async (req, res) => {
    await orderModel.findOneAndUpdate({ _id: req.params.order_id }, { shipping_address: req.body.shipping_address })
    res.json("Updated address")
}

// change the order status of an order
exports.updateOrderStatus = async (req, res) => {
    current_status = await orderModel.find({ _id: req.params.order_id }).select({ _id: 0, status: 1 })
    new_status = current_status[0].status == "not delivered" ? "delivered" : "not delivered"
    await orderModel.findOneAndUpdate({ _id: req.params.order_id }, { status: new_status })
    res.json(`status updated to ${new_status}`)
}