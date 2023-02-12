const express = require("express");
const router = express.Router();
const {
    productCountController,
    productList5Controller
} = require("../controllers/product.controller");

router.post("/count", productCountController);
router.get("/list5", productList5Controller);

module.exports = router;