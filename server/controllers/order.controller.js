const orderModel = require('../models/order.model');
const productModel = require('../models/product.model');

// exports.orderCountController = async (req, res) => {
//     try {
//         const orderCount = await Order.countDocuments();
//         res.json(orderCount);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.orderList5Controller = async (req, res) => {
//     try {
//         const orders = await Order.find().sort({ _id: -1 }).limit(5);
//         res.json(orders);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.countQuantities = async (req, res) => {
//     try {
//         const orders = await Order.find();
//         let quantities = [];
//         orders.forEach(order => {
//             order.products.forEach(product => {
//                 quantities.push(product.quantity);
//             });
//         });
//         res.json(quantities);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// exports.findCost = async (req, res) => {
//     console.log("products: ", products)
//     cost = 0;
//     for (let product of products) {
//         await categoryModel.find({ 'products._id': product }).select({ 'products._id': 1, 'products.price': 1 }).then((p) => {
//             console.log("product object: ", p[0].products)
//             p[0].products.forEach((i) => {
//                 if (product == i._id) {
//                     cost += i.price
//                 }
//             })
//         })
//     }
//     return cost
// }

// get list of all orders of all the users

exports.getAllOrders = async (req, res) => {
    all_orders = await orderModel.find({})
    res.json(all_orders)
}

// add order to the database

exports.addOrder = async (req, res) => {
    const { productId, productQuantity, shipping_address, status } = req.body;
    const new_order = new orderModel({
        // user_id: req.body.user_id,
        products: [{ productId: productId, quantity: productQuantity }],
        shipping_address: shipping_address,
        status: status,
    })
    await new_order.save()
    res.json("added order")
}

// delete an order and all its invoices

// exports.deleteOrder = async (req, res) => {
//     await orderModel.find({ _id: req.body.order_id }).deleteOne().exec()
//     await invoiceModel.find({ order_id: ObjectId(req.body.order_id) }).deleteMany().exec()
//     res.json("deleted order")
// }

// update the orderAddress of an order

exports.updateOrderAddress = async (req, res) => {
    await orderModel.findOneAndUpdate({ _id: req.body.order_id }, { shipping_address: req.body.shipping_address })
    res.json("Updated address")
}

// change the order status of an order

exports.updateOrderStatus = async (req, res) => {
    current_status = await orderModel.find({ _id: req.body.order_id }).select({ _id: 0, status: 1 })
    new_status = current_status[0].status == "not delivered" ? "delivered" : "not delivered"
    await orderModel.findOneAndUpdate({ _id: req.body.order_id }, { status: new_status })
    res.json(`status updated to ${new_status}`)
}
