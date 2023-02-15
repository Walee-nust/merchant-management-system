const express = require("express");
const router = express.Router();
const {
    productCountController,
    productList5Controller,
    getProductsCount,
    addProduct,
    getProductsByName,
    getProductsBycategory_id,
    removeImageFromProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");

// router.post("/count", productCountController);
// router.get("/list5", productList5Controller);

router.get("/count", getProductsCount);
router.post("/", addProduct);
router.get("/:name", getProductsByName);
router.get("/:category_id", getProductsBycategory_id);
router.delete(
    "/:product_id/image/:imageURL",
    removeImageFromProduct
);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

module.exports = router;