const Brand = require('../models/Brand');

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getBrandActive = async (req, res) => {
    try {
        const brands = await Brand.find({is_active: true});
        res.json(brands);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getBrandById = async (req, res) => {
    const { brand_id } = req.body;

    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand id" });
    try {
        const brand = await Brand.findOne({ brand_id: brand_id });
        res.json(brand);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
};

const addBrand = async (req, res) => {
    const { brand_id, brand_name } = req.body;

    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand id" });

    if (!brand_name)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand name" });
        
    try {
        const brand = await Brand({
            brand_id: brand_id,
            brand_name: brand_name
        });

        if (!brand)
            return res
                .status(400)
                .json({ success: false, message: "Brand not found" });

        await brand.save();

        res.json({ success: true, message: "Create brand successfully", brand });
        }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const updateBrand = async (req, res) => {
    const { brand_id, brand_name } = req.body;

    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand id" });

    if (!brand_name)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand name" });
        
    try {
        const brand = await Brand.findOne({ brand_id: brand_id });

        if (!brand)
            return res
                .status(400)
                .json({ success: false, message: "Brand not found" });

        brand.brand_name = brand_name;

        await brand.save();
        }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const deleteBrand = async (req, res) => {
    const { brand_id } = req.body;

    if (!brand_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing brand id" });
        
    try {
        const brand = await Brand.findOne({ brand_id: brand_id });

        if (!brand)
            return res
                .status(400)
                .json({ success: false, message: "Brand not found" });

        brand.is_active = false;

        await brand.save();

        res.json({ success: true, message: "Delete brand successfully", brand });
        }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllBrands,
    getBrandActive,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand
}