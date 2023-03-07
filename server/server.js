const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/connectDB');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/category', require('./routes/category.route'));
app.use('/order', require('./routes/order.route'));
app.use('/product', require('./routes/product.route'));
app.use('/user', require('./routes/user.route'));
app.use('/cart', require('./routes/cart.route'));


app.post('/test', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});