const express = require("express");
const router = express.Router();
const {
    categoryCountController,
    categoryList5Controller
} = require("../controllers/category.controller");

router.post("/count", categoryCountController);
router.get("/list5", categoryList5Controller);

module.exports = router;