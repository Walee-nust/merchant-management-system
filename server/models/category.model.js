const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

Category = mongoose.model("student", categorySchema);

module.exports = Category; 