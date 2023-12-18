const Product = require('../models/Product');
const Category = require('../models/Category');

// @route GET api/products
// @desc Get all products
// @access Public
const getAllProducts = async (req, res) => {
    // return all products
    try {
        const products = await Product.find({});
        res.json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getProductById = async (req, res) => {
    const { product_id } = req.body;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });
    try {
        const product = await Product.findOne({ product_id: product_id });
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
};


// add new product
// @route POST api/product
// @desc Create a new product
// @access Public
const addProduct = async (req, res) => {
    const { product_id, name, description, price, image, category } = req.body;

    // Simple validation
    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });

    try {
        const newProduct = new Product({
            product_id: product_id,
            product_name: name,
            product_description: description,
            price: price,
            image: image,
            category: category
        });

        await newProduct.save();

        res.json({
            success: true,
            message: "Product added successfully",
            product: newProduct,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    getAllProducts
}