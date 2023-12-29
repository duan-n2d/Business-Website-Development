const Order = require('../models/Order');
const OrderLine = require('../models/OrderLine');
const Shipment = require('../models/Shipment');
// const PaymentMethod = require('../models/PaymentMethod');
const Invoice = require('../models/Invoice');
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
    const { user_id, discount_id, payment_method, list_product_objects, address, district, city, country } = req.body;

    const order_id = generateOrderId();

    if (!user_id || !address || !city || !district || !country || !payment_method)
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
        
        const order_id = uuidv4();

        const shipment_id = uuidv4();
        const shipment_address = {
            address: address,
            district: district,
            city: city,
            country: country
        }

        total_price += 50000;

        const shipment = await Shipment.create({
            shipment_id: shipment_id,
            status: "Pending",
            address: shipment_address,
            shipment_cost: 50000,
            ship_date: new Date()
        });

        const order = await Order.create({
            order_id: order_id,
            user_id: user_id,
            status: "Pending",
            shipment_id: shipment_id,
            discount_id: discount_id,
            total_price: total_price,
            discount_id: discount_id,
        });

        const invoice_id = uuidv4();
        const invoice = await Invoice.create({
            invoice_id: invoice_id,
            order_id: order_id,
            payment_method_id: payment_method,
            shipment_id: shipment_id,
            amount: total_price,
            status: "Draft"
        });

        await invoice.save();
        await shipment.save();
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

    if (status == "In Transit") {
        order.status = status;
        await order.save();

        const shipment = await Shipment.findOne({ shipment_id: order.shipment_id });

        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });

        shipment.status = status;

        await shipment.save();

        const invoice = await Invoice.findOne({ order_id: order_id });
        if (!invoice)
            return res
                .status(400)
                .json({ success: false, message: "Invoice not found" });
        
        invoice.status = "Sent";
        await invoice.save();
    }

    if (status == "Cancelled") {
        order.status = status;
        await order.save();

        const shipment = await Shipment.findOne({ shipment_id: order.shipment_id });

        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });

        shipment.status = status;
        await shipment.save();

        const invoice = await Invoice.findOne({ order_id: order_id });

        if (!invoice)
            return res
                .status(400)
                .json({ success: false, message: "Invoice not found" });

        invoice.status = status;
        await invoice.save();
    }

    res.json({ success: true, message: "Update successfully", order });
}

const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.json({ invoices });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getInvoiceById = async (req, res) => {
    const invoice_id = req.params.id;
    
    try {
        const invoice = await Invoice.findOne({ invoice_id: invoice_id });
        if (!invoice)
            return res
                .status(400)
                .json({ success: false, message: "Invoice not found" });
        res.json({ success: true, invoice: invoice });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getInvoicesByOrderId = async (req, res) => {
    const order_id = req.params.id;
    
    try {
        const order = await Order.findOne({ order_id: order_id });
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

    try {
        const invoices = await Invoice.find({ order_id: order_id });
        if (!invoices)
            return res
                .status(400)
                .json({ success: false, message: "Invoice not found" });
        res.json({ success: true, invoices: invoices });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const getShipmentByOrderId = async (req, res) => {
    const order_id = req.params.id;
    
    try {
        const order = await Order.findOne({ order_id: order_id });
        if (!order)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error"});
    }

    try {
        const shipment = await Shipment.findOne({ shipment_id: order.shipment_id });
        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });
        res.json({ success: true, shipment: shipment });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error"});
    }
}

const getShipmentById = async (req, res) => {
    const shipment_id = req.params.id;
    const shipment = Shipment.findOne({ shipment_id: shipment_id });

    try {
        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });
        res.json({ success: true, shipment: shipment });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error"});
    }
}

const updateShipment = async (req, res) => {
    const { status, shipment_id } = req.body;
    const shipment = Shipment.findOne({ shipment_id: shipment_id });

    try {
        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });
        
        if (status == "Delivered") {
            shipment.status = status;
            await shipment.save();

            const order = Order.findOne({ shipment_id: shipment_id });
            if (!order)
                return res
                    .status(400)
                    .json({ success: false, message: "Order not found" });
            
            order.status = status;
            await order.save();

            const invoice = Invoice.findOne({ order_id: order.order_id });
            if (!invoice)
                return res
                    .status(400)
                    .json({ success: false, message: "Invoice not found" });

            invoice.status = "Paid";
            await invoice.save();
        }
        res.json({ success: true, message: "Update successfully", shipment: shipment });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error"});
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    getOrdersByUserId,
    getOrdersByShipmentId,
    getOrderLinesByOrderId,
    getOrderLineById,
    createOrder,
    updateOrder,
    getInvoices,
    getInvoiceById,
    getInvoicesByOrderId,
    getShipmentByOrderId,
    getShipmentById,
    updateShipment
}