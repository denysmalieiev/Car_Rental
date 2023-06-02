import Order from '../models/Order.js';
import User from '../models/User.js';
import Car from '../models/Car.js';
import OfficeLocation from '../models/OfficeLocation.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import mail from '../utils/sendEmail.js';


// 1) --------------| Order Creation |--------------
export const carRental_User_Order_Creation = CatchAsync( async(req, res, next) =>{
    const { officeLocationId, carId, carRange, paymentInfo, totalPrice } = req.body.formData;

    if(officeLocationId==='' || carId==='' || carRange==='' || paymentInfo==={} || totalPrice===''){
        return next(new ErrorHandler('Please proive all details', 400))
    }
    
    const orderExist = await Order.findOne({ car: carId, officeLocation: officeLocationId, paymentInfo: paymentInfo });
    const car = await Car.findById(carId)
    const usr = await User.findById(req.user._id)
    const office = await OfficeLocation.findById(officeLocationId)

    if (orderExist && orderExist.orderStatus==='Processing') {
        return next(new ErrorHandler("Order Already Placed", 400));
    }

    const order = await Order.create({
        officeLocation: office._id,
        car: car._id,
        carRange: carRange,
        paymentInfo: paymentInfo,
        totalPrice: totalPrice,
        paidAt: Date.now(),
        user: usr._id,
    });

    car.order.push(order.id)
    await car.save()
    usr.order.push(order.id)
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

    console.log(order && !order.pickedAt)
    res.status(200).json({
        success: true,
        order,
    });
})

// 3) --------------| User Orders |--------------
export const carRental_User_All_Orders = CatchAsync( async(req, res, next) =>{
    const orders = await Order.find({ user: req.user._id }).populate("user", "firstName lastName email").populate("car").populate("officeLocation").sort({createdAt: -1});

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
    const orders = await Order.find().populate('user').populate('car');

    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    let totalOrderAmount = 0;
    orders.forEach((order) => {
        totalOrderAmount += order.totalPrice;
    });

    const returnResult = filterOrder(orders)

    res.status(200).json({
        success: true,
        totalOrderAmount,
        pendingOrders: returnResult[0],
        activeOrders: returnResult[1],
        closedOrders: returnResult[2],
        canceledOrders: returnResult[3],
        orders,

    });
})

// 6) --------------| Admin: Update Order Status |--------------
export const carRental_Admin_Update_User_Order = CatchAsync( async(req, res, next) =>{
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }

    // If booking is in processing then changing to either booked or canceled
    if(order.orderStatus.toLowerCase()==='processing' && req.body.orderStatus){
        order.orderStatus = req.body.orderStatus
        await order.save({ validateBeforeSave: false });
        return res.status(200).json({
                success: true,
                order
               });
    } // If booking is in progress and order status is not chnaged by admin 
    else if (order.orderStatus.toLowerCase() === "processing" && order.orderStatus.toLowerCase() !== "completed") {
        return next(new ErrorHandler("Car booking not confirmed", 400));
    } // If booking is canceled by admin
    else if (order.orderStatus.toLowerCase() === "canceled" && order.orderStatus.toLowerCase() !== "completed") {
        return next(new ErrorHandler("Booking Canceled", 400));
    }

    // If car booking is confirmed then checking if car is picked or not
    if (order.orderStatus.toLowerCase() === "booked" && req.body.statusChange.toLowerCase()==='booked' && order.pickedAt) {
        return next(new ErrorHandler("Already Picked", 400));
    } else {
        if(req.body.statusChange.toLowerCase()==='booked'){
            order.pickedAt = Date.now();
            await order.save({ validateBeforeSave: false });
        }
    }

    // If car booking is completed then checking if car is returned or not
    if(order.orderStatus.toLowerCase() === "completed" && req.body.statusChange.toLowerCase()==='completed' && order.returnedAt && order.pickedAt){
        return next(new ErrorHandler("Journey already completed", 400));
    } else {
        if((req.body.statusChange.toLowerCase()==='completed')){
            order.orderStatus = 'Completed'
            order.returnedAt = Date.now();
            await order.save({ validateBeforeSave: false });
        }
    }

    return res.status(200).json({
        success: true,
        order
    });
})

// Fuction to fitler orders in categories like pending, active closed and canceled
function filterOrder(orders){
    let returnArray = []
    let pendingOrders = 0
    let activeOrders = 0;
    let closedOrders = 0;
    let canceledOrders = 0;
    orders.map((data)=>{
        if(data.orderStatus.toLowerCase()==='processing'){
            pendingOrders +=1;
        } else if(data.orderStatus.toLowerCase()==='booked'){
            activeOrders +=1;
        } else if(data.orderStatus.toLowerCase()==='completed'){
            closedOrders +=1;
        } else if(data.orderStatus.toLowerCase()==='canceled'){
            canceledOrders +=1;
        }
    })
    returnArray[0] = pendingOrders;
    returnArray[1] = activeOrders;
    returnArray[2] = closedOrders; 
    returnArray[3] = canceledOrders; 
    return returnArray;
}