import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import Car from '../models/Car.js';


// 1) --------------| User Registration |--------------
export const carRental_Car_Registration = CatchAsync(async(req, res, next)=>{
    // a) Destructuring of data
    const {carName, carModel, carCompany, carPicture, carCategory, carEngine, carMileage, carSeatCapacity, carFuelType, carTransmission, rentalPriceCharge } = req.body;
    // b) Checking if all required fields have been provided or not
    if(!carName || !carModel || !carCompany || !carPicture || !carCategory || !carEngine || !carMileage || !carSeatCapacity || !carFuelType || !carTransmission || !rentalPriceCharge){
        return res.send('Please enter all details of a car.')
    }
    // c) If all fields then saving car details
    const cars = await Car.create({
        carName: req.body.carName,
        carModel: req.body.carModel,
        carCompany: req.body.carCompany,
        carPicture: req.body.carPicture,
        carCategory: req.body.carCategory,
        carEngine: req.body.carEngine,
        carMileage: req.body.carMileage,
        carSeatCapacity: req.body.carSeatCapacity,
        carFuelType: req.body.carFuelType,
        carTransmission: req.body.carTransmission,
        rentalPriceCharge: req.body.rentalPriceCharge,
    })
    // d) Sending response
    return res.status(200).json({
        success: true,
        message: 'Car registed.',
        cars
    })
})

// 2) --------------| User Registration |--------------
export const carRental_get_All_Cars = CatchAsync(async(req, res, next)=>{

    const cars = await Car.find();

    if(!cars){
        return next(new ErrorHandler(`Some error occurs`, 400))
    }

    return res.status(200).json({
        success: true,
        message: 'Car registed.',
        length: cars.length,
        cars
    })
})

// 2) --------------| User Registration |--------------
export const carRental_get_Single_Car = CatchAsync(async(req, res, next)=>{

    const carID = req.params.id

    const car = await Car.findById({_id: carID});

    if(!car){
        return next(new ErrorHandler(`Car doesn't exist`, 400))
    }

    return res.status(200).json({
        success: true,
        message: 'Car Found.',
        car
    })
})