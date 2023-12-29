const Invoice = require('../models/Invoice');
const Order = require('../models/Order');
const PaymentMethod = require('../models/PaymentMethod');
const Shipment = require('../models/Shipment');
const { v4: uuidv4 } = require('uuid');

const createInvoice = async (req, res) => {
    const { order_id, payment_method_id, shipment_id, amount, payment_at } = req.body;
    const invoice_id = uuidv4();
    
    try {
        const order = await Order.findOne({ order_id: order_id });
        if (!order)
            return res
                .status(400)
                .json({ success: false, message: "Order not found" });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    try {
        const payment_method = await PaymentMethod.findOne({ payment_method_id: payment_method_id });
        if (!payment_method)
            return res
                .status(400)
                .json({ success: false, message: "Payment method not found" });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    try {
        const shipment = await Shipment.findOne({ shipment_id: shipment_id });
        if (!shipment)
            return res
                .status(400)
                .json({ success: false, message: "Shipment not found" });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }

    const invoice = new Invoice({
        invoice_id: invoice_id,
        order_id: order_id,
        payment_method_id: payment_method_id,
        shipment_id: shipment_id,
        amount: amount,
        payment_at: payment_at
    });

    try {
        await invoice.save();
        res.json({ success: true, message: "Invoice created successfully", invoice: invoice });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
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

module.exports = {
    createInvoice,
    getInvoices,
    getInvoiceById,
    getInvoicesByOrderId
}