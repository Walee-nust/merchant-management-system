const mongoose = require("mongoose");
const uri = `mongodb+srv://abdullahan1928:1928@cluster0.qajpslf.mongodb.net/dashboard`

const connectDB = async () => {
    try {
        mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB Connected successfully");
            });
    } catch (error) {
        console.log(`somer error occur ${error}`);
    }
};

module.exports = connectDB;