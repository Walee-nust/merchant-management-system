const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    // user_id: {
    //     type: Object,
    //     required: true,
    // },
    products: {
        type: [{ product_id, quantity }],
        required: true,
    },
    shipping_address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true })

Order = mongoose.model("student", orderSchema);

module.exports = Order; 