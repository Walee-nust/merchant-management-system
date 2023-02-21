const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user_id: {
        type: Object,
        required: true
    },
    product_id: {
        type: Object,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;