const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    categoryId: {
        type: [Object]
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


Product = mongoose.model("product", productSchema);

module.exports = Product; 