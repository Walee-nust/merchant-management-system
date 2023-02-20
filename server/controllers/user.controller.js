const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const jwt = require("jsonwebtoken");
jwt_secret = "secret";

const User = require("../models/user.model");

exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  // Check if user already exists in DB
  try {
    const user = await User.findOne({ $or: [{ email }] });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }

  // Encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user in DB
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};


exports.signIn = async (req, res) => {




  //getting email and password from body entered by the user
  const { email, password } = req.body;


  try {
    //checking if the user exists in database or not
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(422).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    // comparing the password entered by the user with the hashed password in database
    // bcrypt.compare() is a method which will return true if the password entered by the user is same as the hashed password in database
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(422).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }


    //finally if the user exists and the password is correct then we will send a session/token/jwt token to the user
    const data = {
      id: user.id
    }

    //this token will be sent to the user and will be used to authenticate the user
    //jwt.sign() is taking userData which is in this case ID of user generated by mongoDB and a secret password
    const authToken = jwt.sign(data, jwt_secret);

    res.send({ authToken });

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");

  }

}
