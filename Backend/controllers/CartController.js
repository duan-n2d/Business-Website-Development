const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

const getCartByUserId = async (req, res) => {
    const user_id = req.params.id;
    const cart = await Cart.findOne({ user_id: user_id });
    try {
        if (!cart)
            return res
                .status(400)
                .json({ success: false, message: "Cart not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, cart });
}

const getCartById = async (req, res) => {
    const cart_id = req.params.id;
    const cart = await Cart.findOne({ cart_id: cart_id });
    try {
        if (!cart)
            return res
                .status(400)
                .json({ success: false, message: "Cart not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, cart_id: cart_id });
}

const createCartItem = async (req, res) => {
    const { cart_id, product_id, quantity } = req.body;

    if (!cart_id || !product_id || !quantity)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        const cart = await Cart.findOne({ cart_id: cart_id });
        if (!cart)
            return res
                .status(400)
                .json({ success: false, message: "Cart not found" });

        const product = await Product.findOne({ product_id: product_id });
        if (!product)
            return res
                .status(400)
                .json({ success: false, message: "Product not found" });

        const cartItem = await CartItem.create({
            cart_id,
            product_id,
            quantity
        });

        await cartItem.save();

        res.json({ success: true, message: "Create successfully", cartItem });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getCartByUserId,
    getCartById,
    createCartItem
}