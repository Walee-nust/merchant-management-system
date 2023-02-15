const Product = require('../models/product.model');

// exports.productCountController = async (req, res) => {
//     try {
//         const orderCount = await Product.countDocuments();
//         res.json(orderCount);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// exports.productList5Controller = async (req, res) => {
//     try {
//         const orders = await Product.find().sort({ _id: -1 }).limit(5);
//         res.json(orders);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// Get Products Count
exports.getProductsCount = async (req, res) => {
    try {
        const totalProducts = Product.countDocuments();
        res.json({ totalProducts });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, category_id, price, image } = req.body;
        if (!name || !category_id || !price || !image) {
            throw new Error("Missing required fields");
        }
        // if (image.length > 5) {
        //     throw new Error("A maximum of 5 image is allowed per product");
        // }
        const product = new Product({
            name,
            category_id,
            price,
            image,
        });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Get products by name
exports.getProductsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const products = await Product.find({ name });
        if (!products) {
            throw new Error("Product not found");
        }
        res.send(products);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}

// Get products by category
exports.getProductsBycategory_id = async (req, res) => {
    try {
        const category = req.params.category_id;
        const products = await Product.find({ category });
        if (!products) {
            throw new Error("No products found for the given category");
        }
        res.send(products);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}

// Remove image from product
exports.removeImageFromProduct = async (req, res) => {
    try {
        const product_id = req.params.product_id;
        const imageUrl = req.params.imageURL;
        const product = await Product.findById(product_id);
        if (!product) {
            throw new Error("Product not found");
        }
        const index = product.image.indexOf(imageUrl);
        if (index === -1) {
            throw new Error("Image not found in product");
        }
        product.image.splice(index, 1);
        await product.save();
        res.send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Edit Product
exports.updateProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const product = await Product.findById(product_id);
        if (!product) {
            throw new Error("Product not found");
        }
        const { name, category, price, image } = req.body;
        if (name) {
            product.name = name;
        }
        // if (type) {
        //     product.type = type;
        // }
        if (category) {
            product.category = category;
        }
        if (price) {
            product.price = price;
        }
        if (image) {
            if (image.length + product.image.length > 5) {
                throw new Error("Total number of image can't be greater than 5");
            }
            product.image.push(...image);
        }
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const product = await Product.findByIdAndDelete(product_id);
        if (!product) {
            throw new Error("Product not found");
        }
        res.send({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}