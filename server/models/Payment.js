import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
    {
        resultInfo: {
            resultStatus: {
                type: String,
                required: true
            },
            resultCode: {
                type: String,
                required: true
            },
            resultMsg: {
                type: String,
                required: true
            },
        },
        txnId: {
            type: String,
            required: true
        },
        bankTxnId: {
            type: String,
            required: true
        },
        orderId: {
            type: String,
            required: true
        },
        txnAmount: {
            type: String,
            required: true
        },
        txnType: {
            type: String,
            required: true
        },
        gatewayName: {
            type: String,
            required: true
        },
        bankName: {
            type: String,
            required: true
        },
        paymentMode: {
            type: String,
            required: true
        },
        txnDate: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

const Payment = mongoose.model('Payment', paymentSchema)
export default Payment;