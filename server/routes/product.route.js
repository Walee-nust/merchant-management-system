const express = require("express");
const router = express.Router();
const {
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