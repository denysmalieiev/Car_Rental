import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        carPickLocation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location",
            required: true
        },
        orderItems: [
            {
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                image: {
                    type: String,
                    required: true
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Car",
                    required: true
                },
            },
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        paymentInfo: {
            id: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
        },
        paidAt: {
            type: Date,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0
        },
        orderStatus: {
            type: String,
            required: true,
            default: "Processing",
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;