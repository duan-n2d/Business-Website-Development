const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({ categories });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json({ category });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const createCategory = async (req, res) => {
    const { category_name, category_id } = req.body;

    if (!category_name || !category_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        let category = await Category.findOne({ category_id });
        if (category)
            return res
                .status(400)
                .json({ success: false, message: "Category already exists" });

        category = await Category.findOne({ category_name });
        if (category)
            return res
                .status(400)
                .json({ success: false, message: "Category already exists" });

        const newCategory = await Category.create({
            category_name: category_name,
            category_id: category_id
        });

        await newCategory.save();

        res.json({ success: true, message: "Create successfully", category });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
}