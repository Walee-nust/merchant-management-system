const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
    order_id: {
        type: Object,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    product_id: {
        type: Object,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
})

Invoice = mongoose.model("invoice", invoiceSchema);

modules.exports = Invoice;