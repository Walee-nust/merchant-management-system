const express = require("express");
const router = express.Router();
const { getAllProducts, increaseQuantity, reduceQuantity, removeAllProducts } = require("../controllers/cart.controller");

router.get('/getCart/:user_id', getAllProducts)
router.post('/addCart/:user_id', increaseQuantity)
router.delete('/deleteCart/:user_id', reduceQuantity)
router.delete('/emptyCart/:user_id', removeAllProducts)

module.exports = router;
