const express = require("express");
const router = express.Router();
const {
    categoryCountController,
    categoryList5Controller,
    getCountCategories,
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/category.controller");

// router.post("/count", categoryCountController);
// router.get("/list5", categoryList5Controller);

router.get("/count", getCountCategories);
router.get("/", getAllCategories);
router.post("/", addCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;