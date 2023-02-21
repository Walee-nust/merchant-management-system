const express = require("express");
const { getAllProducts, increaseQuantity, reduceQuantity, removeAllProducts } = require("../controllers/cart.controller");
const router = express.Router();

router.get('/getCart/:user_id', getAllProducts)
router.post('/addCart/:user_name', increaseQuantity)
router.delete('/deleteCart/:user_id', reduceQuantity)
router.delete('/emptyCart/:user_id', removeAllProducts)

module.exports = router;
