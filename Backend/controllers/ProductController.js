const Product = require('../models/Product');
const Category = require('../models/Category');
const Brand = require('../models/Brand');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getProductActive = async (req, res) => {
    try {
        const products = await Product.find({is_active: true});
        res.json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

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

const addProduct = async (req, res) => {
    const { product_id, product_name, product_description, specifications, brand_id, purchase_price, current_price, quantity_in_stock} = req.body;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });
    if (!product_name)
        return res
            .status(400)
            .json({ success: false, message: "Missing product name" });
    if (!product_description)
        return res
            .status(400)
            .json({ success: false, message: "Missing product description" });
    // if (!specifications)
    //     return res
    //         .status(400)
    //         .json({ success: false, message: "Missing product specifications" });
    // if (!brand_id)
    //     return res
    //         .status(400)
    //         .json({ success: false, message: "Missing product brand id" });
    if (!purchase_price)
        return res
            .status(400)
            .json({ success: false, message: "Missing product purchasing price" });
    if (!current_price)
        return res
            .status(400)
            .json({ success: false, message: "Missing product current price" });
    if (!quantity_in_stock)
        return res
            .status(400)
            .json({ success: false, message: "Missing product quantity in stock" });

    try {
        const product = await Product.findOne({ product_id });
        if (product)
            return res
                .status(400)
                .json({ success: false, message: "Product already exists" });
        
        const newProduct = new Product({ product_id: product_id, product_name: product_name, product_description: product_description, specifications: specifications, brand_id: brand_id, purchase_price: purchase_price, current_price: current_price, quantity_in_stock: quantity_in_stock, discount_id: null});
        await newProduct.save();

        res.json({ success: true, message: "Create product successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const updateProduct = async (req, res) => {
    const { product_id, product_name, product_description, specifications, brand_id, purchase_price, current_price, quantity_in_stock} = req.body;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });
    if (!product_name)
        return res
            .status(400)
            .json({ success: false, message: "Missing product name" });
    if (!product_description)
        return res
            .status(400)
            .json({ success: false, message: "Missing product description" });
    // if (!specifications)
    //     return res
    //         .status(400)
    //         .json({ success: false, message: "Missing product specifications" });
    if (!purchase_price)
        return res
            .status(400)
            .json({ success: false, message: "Missing product purchasing price" });
    if (!current_price)
        return res
            .status(400)
            .json({ success: false, message: "Missing product current price" });
    if (!quantity_in_stock)
        return res
            .status(400)
            .json({ success: false, message: "Missing product quantity in stock" });

    try {
        const product = await Product.findOne({ product_id });
        if (!product)
            return res
                .status(400)
                .json({ success: false, message: "Product does not exist" });
        
        product.product_name = product_name;
        product.product_description = product_description;
        product.specifications = specifications;
        product.brand_id = brand_id;
        product.purchase_price = purchase_price;
        product.current_price = current_price;
        product.quantity_in_stock = quantity_in_stock;
        await product.save();

        res.json({ success: true, message: "Update product successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

const deleteProduct = async (req, res) => {
    const { product_id } = req.body;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });

    try {
        const product = await Product.findOne({ product_id });
        if (!product)
            return res
                .status(400)
                .json({ success: false, message: "Product does not exist" });
        
        product.is_active = false;
        await product.save();

        res.json({ success: true, message: "Delete product successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllProducts,
    getProductActive,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}