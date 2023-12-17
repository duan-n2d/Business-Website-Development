const Product = require('../models/Product');

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

module.exports = {
    getAllProducts
}