import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            default: 'India',
            required: true,
        },
        pin: {
            type: Number,
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
)

const Location = mongoose.model('Location', locationSchema)
export default Location;