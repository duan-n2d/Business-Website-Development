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
    const cartItems = await CartItem.find({ cart_id: cart_id });

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
    const products = [];

    for (let i = 0; i < cartItems.length; i++) {
        products.push({
            product_id: cartItems[i].product_id,
            quantity: cartItems[i].quantity
        });
        }

    res.json({ success: true, cart, products });

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

const updateCartItem = async (req, res) => {
    const { cart_id, products } = req.body;

    if (!cart_id || !products)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        let temp = products
        const items = await CartItem.find({ cart_id: cart_id});
        if (!items){
            for (let i=0; i<temp.length; i++){
                const cartItem = await CartItem.create({
                    cart_id,
                    product_id: temp[i].product_id,
                    quantity: temp[i].quantity
                });
                await cartItem.save();
            }
        } else {
            for (let i=0; i<items.length; i++){
                for (let j=0; j<temp.length; j++){
                    if (items[i].product_id === temp[j].product_id){
                        items[i].quantity = temp[j].quantity
                        await items[i].save()
                        temp.splice(j, 1)
                    } else {
                        if (items[i].is_active)
                            items[i].is_active = false
                            await items[i].save()
                    }
                }
            }
            for (let i=0; i<temp.length; i++){
                const cartItem = await CartItem.create({
                    cart_id,
                    product_id: temp[i].product_id,
                    quantity: temp[i].quantity
                });
                await cartItem.save();
            }
        
        }
        res.json({ success: true, message: "Update successfully" });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getCartByUserId,
    getCartById,
    createCartItem,
    updateCartItem
}