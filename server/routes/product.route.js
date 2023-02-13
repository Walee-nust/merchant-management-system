const express = require("express");
const router = express.Router();
const {
    productCountController,
    productList5Controller,
    getProductsCount,
    addProduct,
    getProductsByName,
    getProductsByCategoryId,
    removeImageFromProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");

// router.post("/count", productCountController);
// router.get("/list5", productList5Controller);

router.get("/products/count", getProductsCount);
router.post("/products", addProduct);
router.get("/products/:name", getProductsByName);
router.get("/products/:categoryId", getProductsByCategoryId);
router.delete(
    "/products/:productId/images/:imageURL",
    removeImageFromProduct
);
router.put("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

module.exports = router;