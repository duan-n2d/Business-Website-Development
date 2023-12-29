const Order = require('../models/Order');
const OrderLine = require('../models/OrderLine');
// const User = require('../models/User');
// const Product = require('../models/Product');
// const Discount = require('../models/Discount');
const Shipment = require('../models/Shipment');
// const PaymentMethod = require('../models/PaymentMethod');
// const Invoice = require('../models/Invoice');
const { v4: uuidv4 } = require('uuid');

function generateOrderId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const totalOrdersByDay = Order.find({ created_at: { $gte: new Date(year, month, day), $lt: new Date(year, month, day + 1) } }).countDocuments();
    return `SO${year}${month}${day}${totalOrdersByDay + 1}`;
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json({ orders });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getOrderById = async (req, res) => {
    const order_id = req.params.id;
    const order = await Order.findOne({ order_id: order_id });
    try {
        if (!order)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, order_id: order_id });
}

const getOrdersByUserId = async (req, res) => {
    const user_id = req.params.id;
    const orders = await Order.find({ user_id: user_id });
    try {
        if (!orders)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, orders });
}

const getOrdersByShipmentId = async (req, res) => {
    const shipment_id = req.params.id;
    const shipment = await Shipment.findOne({ shipment_id: shipment_id });
    try {
        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getOrderLinesByOrderId = async (req, res) => {
    const order_id = req.params.id;
    const order = await Order.findOne({ order_id: order_id });
    try {
        if (!order)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    const orderLines = await OrderLine.find({ order_id: order_id });
    try {
        if (!orderLines)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    res.json({ success: true, orderLines });
}

const getOrderLineById = async (req, res) => {
    const order_line_id = req.params.id;
    const orderLine = await OrderLine.findOne({ order_line_id: order_line_id });
    try {
        if (!orderLine)
            return res
                .status(400)
                .json({ success: false, message: "Order line not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const createOrder = async (req, res) => {
    const { user_id, discount_id, shipment_id, payment_method, list_product_objects } = req.body;

    const order_id = generateOrderId();

    if (!user_id || !shipment_id || !payment_method)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        total_price = 0;
        for (product_object of list_product_objects) {
            const order_line = await OrderLine.create({
                order_line_id: uuidv4(),
                order_id: order_id,
                product_id: product_object.product_id,
                quantity: product_object.quantity,
                price: product_object.price
            });
            await order_line.save();
            total_price += product_object.price * product_object.quantity;
        }

        const order = await Order.create({
            order_id: uuidv4(),
            user_id,
            discount_id,
            total_price,
            shipment_id,
            payment_method
        });

        await order.save();

        res.json({ success: true, message: "Create successfully", order });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const updateOrder = async (req, res) => {
    const status = req.body.status;
    const order_id = req.params.id;
    const order = await Order.findOne({ order_id: order_id });
    try {
        if (!order)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    order.status = status;
    await order.save();

    res.json({ success: true, message: "Update successfully", order });
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrdersByUserId,
    getOrdersByShipmentId,
    getOrderLinesByOrderId,
    getOrderLineById,
    createOrder,
    updateOrder
}