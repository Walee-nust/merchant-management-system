const express = require("express");
const router = express.Router();
const {
    getAllOrders,
    addOrder,
    deleteOrder,
    updateOrderAddress,
    updateOrderStatus,
    getOrderInvoices,
    deleteInvoice,
    getOrdersCount
} = require("../controllers/order.controller");

router.get('/getAllOrders', getAllOrders)
router.get('/getOrderInvoices/:order_id', getOrderInvoices)
router.delete('/deleteInvoice/:invoice_id', deleteInvoice)
router.post('/addOrder', addOrder)
router.delete('/deleteOrder/:order_id', deleteOrder)
router.put('/updateOrderAddress/:order_id', updateOrderAddress)
router.put('/updateOrderStatus/:order_id', updateOrderStatus)
router.get('/count', getOrdersCount)

module.exports = router;