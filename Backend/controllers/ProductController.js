const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductCategory = require('../models/ProductCategory');

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
    const product_id = req.params.id;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });
    try {
        const product = await Product.findOne({ product_id: product_id });
        res.json(
            { product }
        );
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
};

const getProductByCategoryId = async (req, res) => {
    const category_id = req.params.id;

    if (!category_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing category id" });
    try {
        const products = await ProductCategory.find({ category_id: category_id });
        res.json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getProductByBrandId = async (req, res) => {
    const id = req.params.id;

    if (!id)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand id" });
    try {
        const products = await Product.find({ brand_id: id });
        res.json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const addProduct = async (req, res) => {
    const { product_id, product_name, product_description, specifications, brand_id, purchase_price, current_price, quantity_in_stock, list_product_categories, list_images} = req.body;

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
    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product brand id" });
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

    if (!list_images)
        return res
            .status(400)
            .json({ success: false, message: "Missing product images" });

    try {
        const product = await Product.findOne({ product_id });
        if (product)
            return res
                .status(400)
                .json({ success: false, message: "Product already exists" });
        
        const newProduct = new Product({ product_id: product_id, product_name: product_name, product_description: product_description, specifications: specifications, brand_id: brand_id, purchase_price: purchase_price, current_price: current_price, quantity_in_stock: quantity_in_stock, discount_id: null});

        await newProduct.save();

        if (list_product_categories){
            // map list_product_categories to ProductCategory
            // product_id, category_id, is_active
            try {
                const categories = list_product_categories.map((category) => {
                    const newCategory = new ProductCategory({ product_id: product_id, category_id: category, is_active: true});
                    newCategory.save();
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        }

        // map list_images to ProductImage
        // image: url, numerical_order, product_id
        try {
            const images = list_images.map((image, index) => {
                const newImage = new ProductImage({ product_id: product_id, image_url: image, numerical_order: index});
                newImage.save();
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
        
        res.json({ success: true, message: "Create product successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const updateProduct = async (req, res) => {
    const { product_id, product_name, product_description, specifications, brand_id, current_price, discount_id,quantity_in_stock, list_product_categories, list_images} = req.body;

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
    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product brand id" });
    if (!current_price)
        return res
            .status(400)
            .json({ success: false, message: "Missing product current price" });
    if (!quantity_in_stock)
        return res
            .status(400)
            .json({ success: false, message: "Missing product quantity in stock" });
    if (!list_images)
        return res
            .status(400)
            .json({ success: false, message: "Missing product images" });

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
        product.current_price = current_price;
        product.quantity_in_stock = quantity_in_stock;
        product.discount_id = discount_id;

        if (list_product_categories){
            for (let i = 0; i < list_product_categories.length; i++){
                const category = await ProductCategory.findOne({ product_id: product_id, category_id: list_product_categories[i] });
                if (!category){
                    const newCategory = new ProductCategory({ product_id: product_id, category_id: list_product_categories[i], is_active: true});
                    await newCategory.save();
                }
            }

            const categories = await ProductCategory.find({ product_id: product_id });
            for (let i = 0; i < categories.length; i++){
                if (!list_product_categories.includes(categories[i].category_id)){
                    categories[i].is_active = false;
                    await categories[i].save();
                }
            }
        }

        // map list_images to ProductImage
        // image: url, numerical_order, product_id
        const images = await ProductImage.find({ product_id: product_id });
        for (let i = 0; i < images.length; i++){
            if (!list_images.includes(images[i].image_url)){
                images[i].is_active = false;
                await images[i].save();
            }
        }

        for (let i = 0; i < list_images.length; i++){
            const image = await ProductImage.findOne({ product_id: product_id, image_url: list_images[i] });
            if (!image){
                const newImage = new ProductImage({ product_id: product_id, image_url: list_images[i], numerical_order: i});
                await newImage.save();
            }
        }

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

const getImagesByProductId = async (req, res) => {
    const product_id = req.params.id;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });

    try {
        const images = await ProductImage.find({ product_id: product_id });
        // return list json images: numerical_order, img_url
        // sort by numerical_order
        for (let i = 0; i < images.length; i++){
            for (let j = i + 1; j < images.length; j++){
                if (images[i].numerical_order > images[j].numerical_order){
                    const tmp = images[i];
                    images[i] = images[j];
                    images[j] = tmp;
                }
            }
        }
        let res_images = [];
        for (let i = 0; i < images.length; i++){
            res_images.push('https://drive.google.com/uc?id=' + images[i].image_url);
        }
        res.json(res_images);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

const getCategoriesOfProduct = async (req, res) => {
    const product_id = req.params.id;

    if (!product_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing product id" });

    try {
        const categories = await ProductCategory.find({ product_id: product_id });
        // return list json categories: category_id
        let res_categories = [];
        for (let i = 0; i < categories.length; i++){
            res_categories.push(categories[i].category_id);
        }
        res.json(res_categories);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

module.exports = {
    getAllProducts,
    getProductActive,
    getProductById,
    getProductByCategoryId,
    getProductByBrandId,
    addProduct,
    updateProduct,
    deleteProduct,
    getImagesByProductId,
    getCategoriesOfProduct
}