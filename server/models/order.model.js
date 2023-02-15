const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id: {
        type: Object,
        required: true,
    },
    shipping_address: {
        type: String
    },
    cost: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

Order = mongoose.model("order", orderSchema);

module.exports = Order; 