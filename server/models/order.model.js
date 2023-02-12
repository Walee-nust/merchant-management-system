const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters long"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        minlength: [3, "Category must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
},
    { timestamps: true }
);

Order = mongoose.model("student", OrderSchema);

module.exports = Order; 