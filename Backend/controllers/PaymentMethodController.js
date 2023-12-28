const PaymentMethod = require('../models/PaymentMethod');

const getAllPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await PaymentMethod.find();
        res.json({ paymentMethods });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

const createPaymentMethod = async (req, res) => {
    const { payment_method_name, payment_method_id } = req.body;

    if (!payment_method_name || !payment_method_id)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        let paymentMethod = await PaymentMethod.findOne({ payment_method_id });
        if (paymentMethod)
            return res
                .status(400)
                .json({ success: false, message: "Payment method already exists" });

        paymentMethod = await PaymentMethod.findOne({ payment_method_name });
        if (paymentMethod)
            return res
                .status(400)
                .json({ success: false, message: "Payment method already exists" });

        const newPaymentMethod = await PaymentMethod.create({
            payment_method: payment_method_name,
            payment_method_id: payment_method_id
        });

        await newPaymentMethod.save();

        res.json({ success: true, message: "Create successfully", paymentMethod });
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
    getAllPaymentMethods,
    createPaymentMethod
}