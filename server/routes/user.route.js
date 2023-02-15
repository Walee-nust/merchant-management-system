const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signUp } = require("../controllers/user.controller");

router.post(
    "/signup",
    [
      check("name").exists(),
      check("email").exists().isEmail(),
      check("password").exists(),
    ], signUp)

module.exports = router;