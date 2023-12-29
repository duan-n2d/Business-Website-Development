const ProductReview = require('../models/ProductReview');
const { v4: uuidv4 } = require('uuid');

const getAllReviewsByProductId = async (req, res) => {
    const product_id = req.params.id;
    const reviews = await ProductReview.find({ product_id: product_id });
    try {
        if (!reviews)
            return res
                .status(400)
                .json({ success: false, message: "Reviews not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, reviews });
}

const getAllReviewsByUserId = async (req, res) => {
    const user_id = req.params.id;
    const reviews = await ProductReview.find({ user_id: user_id });
    try {
        if (!reviews)
            return res
                .status(400)
                .json({ success: false, message: "Reviews not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, reviews });
}

const getReviewById = async (req, res) => {
    const review_id = req.params.id;
    if (!review_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });
    
    try {
        const review = await ProductReview.findOne({ review_id: review_id });

        if (!review)
            return res
                .status(400)
                .json({ success: false, message: "Review not found" });
        
        res.json({ success: true, review });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const createReview = async (req, res) => {
    const { user_id, product_id, review_content, review_rating } = req.body;

    if (!user_id || !product_id || !review_content || !review_rating)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        const review = await ProductReview.create({
            review_id: uuidv4(),
            user_id,
            product_id,
            review_content,
            review_rating
        });
        res.json({ success: true, message: "Create successfully", review });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
};

const deleteReview = async (req, res) => {
    const review_id = req.params.id;
    if (!review_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        const review = await ProductReview.findOne({ review_id: review_id });

        if (!review)
            return res
                .status(400)
                .json({ success: false, message: "Review not found" });

        review.is_active = false;
        await review.save();

        res.json({ success: true, message: "Delete successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    getAllReviewsByProductId,
    getAllReviewsByUserId,
    getReviewById,
    createReview,
    deleteReview
};