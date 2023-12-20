const jwt = require("jsonwebtoken");
const Discount = require("../models/Discount");

//API
const getAllDiscountController = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.json({ success: true, discounts });
  } catch (error) {
    console.log(error);
    res.status(500)
    .json({ success: false, message: "Internal server error" });
  }
}

const createDiscountController = async (req, res) => {
    const { discount_id, discount_name, type_discount, discount_value, start_date, end_date } = req.body;
    if (!discount_id || !discount_name || !type_discount || !discount_value || !start_date || !end_date) {
        return res.status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    try {
        const discount = await Discount.findOne({ discount_id });
        if (discount) {
        return res.status(400)
        .json({ success: false, message: "Discount already exists" });
        }
        const newDiscount = new Discount({
        discount_id,
        discount_name,
        type_discount,
        discount_value,
        start_date,
        end_date
        });
        await newDiscount.save();
        res.json({ success: true, message: "Create discount successfully", newDiscount });
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ success: false, message: "Internal server error" });
    }
}

const updateDiscountController = async (req, res) => {
    const { discount_id, discount_name, type_discount, discount_value, start_date, end_date } = req.body;
    if (!discount_id || !discount_name || !type_discount || !discount_value || !start_date || !end_date) {
        return res.status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    try {
        const discount = await Discount.findOne({ discount_id });
        if (!discount) {
        return res.status(400)
        .json({ success: false, message: "Discount not found" });
        }
        await Discount.updateOne({ discount_id }, {
        discount_name,
        type_discount,
        discount_value,
        start_date,
        end_date
        });
        res.json({ success: true, message: "Update discount successfully" });
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ success: false, message: "Internal server error" });
    }
}

const deleteDiscountController = async (req, res) => {
    const { discount_id } = req.body;
    if (!discount_id) {
        return res.status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    try {
        const discount = await Discount.findOne({ discount_id });
        if (!discount) {
        return res.status(400)
        .json({ success: false, message: "Discount not found" });
        }
        await Discount.deleteOne({ discount_id });
        res.json({ success: true, message: "Delete discount successfully" });
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllDiscountController,
    createDiscountController,
    updateDiscountController,
    deleteDiscountController
}