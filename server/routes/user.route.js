const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signUp, signIn } = require("../controllers/user.controller");

router.post(
    "/signup",
    [
      check("name").exists(),
      check("email").exists().isEmail(),
      check("password").exists(),
    ], signUp)

router.post("/signin", signIn);

module.exports = router;