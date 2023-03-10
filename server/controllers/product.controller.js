const Product = require('../models/product.model');
const Category = require('../models/category.model');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        // change the category id to category name
        for (let i = 0; i < products.length; i++) {
            const category = await Category.findById(products[i].categoryId);
            products[i].categoryId = category.name;
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single product
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        // change the category id to category name
        const category = await Category.findById(product.categoryId);
        product.categoryId = category.name;
        if (!product) {
            throw new Error("Product not found");
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit Product
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
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
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        res.send({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

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
        const { name, categoryId, price, image } = req.body;
        if (!name || !categoryId || !price || !image) {
            throw new Error("Missing required fields");
        }
        // if (image.length > 5) {
        //     throw new Error("A maximum of 5 image is allowed per product");
        // }
        const product = new Product({
            name,
            categoryId,
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
exports.getProductsBycategoryId = async (req, res) => {
    try {
        const category = req.params.categoryId;
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
        const productId = req.params.productId;
        const imageUrl = req.params.imageURL;
        const product = await Product.findById(productId);
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
