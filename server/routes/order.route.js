const express = require("express");
const router = express.Router();
const {
    orderCountController,
    orderList5Controller,
    getAllOrders,
    addOrder,
    // deleteOrder,
    updateOrderAddress,
    updateOrderStatus
} = require("../controllers/order.controller");

// router.post("/count", orderCountController);
// router.get("/list5", orderList5Controller);
router.get('/getAllOrders', getAllOrders)
router.post('/addOrder', addOrder)
// router.delete('/deleteOrder', deleteOrder)
router.put('/updateOrderAddress', updateOrderAddress)
router.put('/updateOrderStatus', updateOrderStatus)

module.exports = router;