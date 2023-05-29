import Order from '../models/Order.js';
import User from '../models/User.js';
import Car from '../models/Car.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import mail from '../utils/sendEmail.js';

// 1) --------------| Order Creation |--------------
export const carRental_User_Order_Creation = CatchAsync( async(req, res, next) =>{
    const { officeLocationId, carId, carRange, paymentInfo, totalPrice } = req.body;

    if( !officeLocationId || !carId || !carRange || !paymentInfo || !totalPrice){
        return next(new ErrorHandler('Please proive all details', 400))
    }
    
    const orderExist = await Order.findOne({ car: carId, officeLocation: officeLocationId, paymentInfo: paymentInfo, });
    const car = await Car.findById({_id: carId})
    const usr = await User.findById({_id: req.user._id})

    if (orderExist && orderExist.orderStatus==='Processing') {
        return next(new ErrorHandler("Order Already Placed", 400));
    }
    const order = await Order.create({
        officeLocation: officeLocationId,
        car: carId,
        carRange,
        paymentInfo,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    car.order.push(order._id)
    await car.save()
    usr.order.push(order._id)
    await usr.save();

    // const message = `Dear ${req.user.name},\n\n Greeting of the Day, \n\nYou booking ${order._id} for renting a car is successful. \n\nThanks\n\nWishing for your happy journey!`;

    // try{
    //     await mail.sendEmail({
    //         email: user.email,
    //         subject: 'Rented Car Order Status',
    //         message
    //     })
    //     res.status(200).json({
    //         success: true,
    //         message: `Email sent to ${user.email} successfully`
    //     })
    // } catch(err){
    //     return next(new ErrorHandler(err.message, 500))
    // }

    res.status(201).json({
        success: true,
        order,
    });
})

// 2) --------------| Get Single Order |--------------
export const carRental_User_Single_Order = CatchAsync( async(req, res, next) =>{
    const order = await Order.findById(req.params.id).populate("user", "firstName lastName email").populate("car").populate("officeLocation");
    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
})

// 3) --------------| User Orders |--------------
export const carRental_User_All_Orders = CatchAsync( async(req, res, next) =>{
    const orders = await Order.find({ user: req.user._id }).sort({createdAt: -1});

    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({
        success: true,
        orders,
    });
})

// 4) --------------| User Order Cancel |--------------
export const carRental_User_Cancel_A_Order = CatchAsync( async(req, res, next) =>{
    const orderChk = await Order.findById(req.params.id);

    if (!orderChk) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    const order = await Order.findByIdAndDelete(req.params.id);
    

    res.status(200).json({
        success: true,
    });
})

// 5) --------------| Admin: Get All Orders |--------------
export const carRental_Admin_Users_All_Orders = CatchAsync( async(req, res, next) =>{
    const orders = await Order.find();

    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    let totalOrderAmount = 0;
    orders.forEach((order) => {
        totalOrderAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        orders,
        totalOrderAmount,
    });
})

// 6) --------------| Admin: Update Order Status |--------------
export const carRental_Admin_Update_User_Order = CatchAsync( async(req, res, next) =>{
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    if (order.orderStatus === "Picked") {
        return next(new ErrorHandler("Already Picked", 400));
    }
    
    order.orderStatus = req.body.status;
    if (req.body.status === "Picked") {
        order.pickedAt = Date.now();
    }

    if (req.body.status === "Returned") {
        order.returnedAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    });
})