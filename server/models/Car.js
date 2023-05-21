import mongoose from 'mongoose';


const carSchema = new mongoose.Schema(
    {
        carName: {
            type: String,
            require: true,
        },
        carModel: {
            type: String,
            require: true,
        },
        carCompany: {
            type: String,
            require: true,
        },
        carPicture: [
            {
                type: String,
                require: true,
            },
        ],
        carCategory: {
            type: String,
            require: true,
        },
        carEngine: {
            type: String,
            require: true,
        },
        carMileage: {
            type: String,
            require: true,
        },
        carSeatCapacity: {
            type: Number,
            require: true,
        },
        carFuelType: {
            type: String,
            require: true,
        },
        carTransmission: {
            type: String,
            require: true,
        },
        rentalPriceCharge: {
            type: Number,
            require: true,
        },
        carBookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking',
            },
        ]
    },
    {
        timeStamps: true,        
        toJSON: { virtuals: true },
    }
)

const Car = mongoose.model('Car', carSchema)

export default Car;