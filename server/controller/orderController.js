import User from '../models/User.js';
import OfficeLocation from '../models/OfficeLocation.js';
import Order from '../models/Order.js';
import Car from '../models/Car.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import mail from '../utils/sendEmail.js';

// 1) --------------| Order Creation |--------------
export const carRental_User_Order_Creation = CatchAsync( async(req, res, next) =>{
    const { carPickLocation, carBookedInfo, paymentInfo, totalPrice } = req.body;
    
    const orderExist = await Order.findOne({ paymentInfo });
    if (orderExist) {
        return next(new ErrorHandler("Order Already Placed", 400));
    }
    const order = await Order.create({
        carPickLocation,
        carBookedInfo,
        paymentInfo,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    const message = `Dear ${req.user.name},\n\n Greeting of the Day, \n\nYou booking for renting a car is successful, below are the order details:\n\n ${PickLocationAddress}, \n${carBookedInfo}, \n ${totalPrice}, \n\nThanks\n\nWishing for your happy journey!`;

    try{
        await mail.sendEmail({
            email: user.email,
            subject: 'Rented Car Order Status',
            message
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })
    } catch(err){
        return next(new ErrorHandler(err.message, 500))
    }

    res.status(201).json({
        success: true,
        order,
    });
})

// 2) --------------| Get Single Order |--------------
export const carRental_User_Single_Order = CatchAsync( async(req, res, next) =>{
    const order = await Order.findById(req.params.id).populate("user", "firstName lastName email");
    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
})

// 3) --------------| Get Logged In User Orders |--------------
export const carRental_User_All_Orders = CatchAsync( async(req, res, next) =>{
    const orders = await Order.find({ user: req.user._id });

    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    res.status(200).json({
        success: true,
        orders,
    });
})

// 4) --------------| Admin: Get All Orders |--------------
export const carRental_Admin_Users_All_Orders = CatchAsync( async(req, res, next) =>{
    const orders = await Order.find();

    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    let totalAmount = 0;
    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        orders,
        totalAmount,
    });
})

// 5) --------------| Admin: Update Order Status |--------------
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

// 6) --------------| Admin: Delete a Order |--------------
export const carRental_Admin_Delete_User_Order = CatchAsync( async(req, res, next) =>{
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
})