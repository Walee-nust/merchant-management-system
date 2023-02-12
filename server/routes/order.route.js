const express = require("express");
const router = express.Router();
const {
    orderCountController,
    orderList5Controller
} = require("../controllers/order.controller");

router.post("/count", orderCountController);
router.get("/list5", orderList5Controller);

module.exports = router;