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
router.get("/:id", getProduct);
router.get("/count", getProductsCount);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
// router.get("/:name", getProductsByName);
// router.get("/:categoryId", getProductsBycategoryId);
// router.delete(
//     "/:productId/image/:imageURL",
//     removeImageFromProduct
// );

module.exports = router;