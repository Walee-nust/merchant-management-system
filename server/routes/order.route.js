const express = require("express");
const router = express.Router();
const {
    getAllOrders,
    addOrder,
    deleteOrder,
    updateOrderAddress,
    updateOrderStatus,
    getOrderInvoices,
    deleteInvoice
} = require("../controllers/order.controller");

router.get('/getAllOrders', getAllOrders)
router.get('/getOrderInvoices/:order_id', getOrderInvoices)
router.delete('/deleteInvoice/:invoice_id', deleteInvoice)
router.post('/addOrder', addOrder)
router.delete('/deleteOrder', deleteOrder)
router.put('/updateOrderAddress', updateOrderAddress)
router.put('/updateOrderStatus', updateOrderStatus)

module.exports = router;