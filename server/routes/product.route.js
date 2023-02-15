const express = require("express");
const router = express.Router();
const {
    productCountController,
    productList5Controller,
    getProductsCount,
    addProduct,
    getProductsByName,
    getProductsBycategoryId,
    removeImageFromProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProduct
} = require("../controllers/product.controller");

// router.post("/count", productCountController);
// router.get("/list5", productList5Controller);

router.get("/", getProducts);
router.get("/count", getProductsCount);
router.post("/", addProduct);
router.get("/:name", getProductsByName);
router.get("/:categoryId", getProductsBycategoryId);
router.delete(
    "/:productId/image/:imageURL",
    removeImageFromProduct
);
router.get("/:productId", getProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;