const Post = require('../models/Post');
const PostDetail = require('../models/PostDetail');
const { v4: uuidv4 } = require('uuid');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ posts });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getPostById = async (req, res) => {
    const post_id = req.params.id;
    try {
        const post = await Post.findOne({ post_id: post_id });
        if (!post) {
            return res.status(400)
                .json({ success: false, message: "Post not found" });
        }

        const post_detail = await PostDetail.find({ post_id: post_id });
        res.json({ post, post_detail });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getPostsByAdminId = async (req, res) => {
    const admin_id = req.params.id;
    try {
        const posts = await Post.find({ admin_id: admin_id });
        if (!posts) {
            return res.status(400)
                .json({ success: false, message: "Posts not found" });
        }

        res.json({ posts });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const createPost = async (req, res) => {
    const { title, author, list_post_detail_value } = req.body;
    const post_id = uuidv4();

    try {
        const user = await User.findOne({ user_id: author });
        if (!user) {
            return res.status(400)
                .json({ success: false, message: "User not found" });
        }

        if (!title) {
            return res.status(400)
                .json({ success: false, message: "Title is required" });
        }

        if (!list_post_detail_value) {
            return res.status(400)
                .json({ success: false, message: "Post detail is required" });
        }

        const post = await Post.create({
            post_id: post_id,
            title: title,
            admin_id: author})
        
        // PostDetail: { post_id, order, type, value }
        const list_post_detail = list_post_detail_value.map((value, index) => {
            return {
                post_id: post_id,
                order: index,
                type: value.type,
                value: value.value
            }
        });
        const post_detail = await PostDetail.insertMany(list_post_detail);

        post.save();
        post_detail.save();

        res.json({ success: true, message: "Post created successfully", post });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const updatePost = async (req, res) => {
    const { post_id, title, is_active, list_post_detail_value } = req.body;
    
    try {
        const post = await Post.findOne({ post_id: post_id });
        if (!post) {
            return res.status(400)
                .json({ success: false, message: "Post not found" });
        }

        if (!title) {
            return res.status(400)
                .json({ success: false, message: "Title is required" });
        }

        if (!list_post_detail_value) {
            return res.status(400)
                .json({ success: false, message: "Post detail is required" });
        }

        const post_detail = await PostDetail.find({ post_id: post_id });
        if (!post_detail) {
            return res.status(400)
                .json({ success: false, message: "Post detail not found" });
        }

        post.title = title;
        post.is_active = is_active;
        post_detail.forEach((detail, index) => {
            detail.type = list_post_detail_value[index].type;
            detail.value = list_post_detail_value[index].value;
        });

        post.save();
        post_detail.save();

        res.json({ success: true, message: "Post updated successfully", post });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostsByAdminId,
    createPost,
    updatePost
}