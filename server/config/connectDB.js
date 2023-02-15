const mongoose = require("mongoose");
const uri = `mongodb+srv://muneeb121:muneeb121@cluster0.cywt96y.mongodb.net/MerchantManagement?retryWrites=true&w=majority`

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