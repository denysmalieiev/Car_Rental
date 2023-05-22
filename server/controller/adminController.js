import User from '../models/User.js';
import OfficeLocation from '../models/OfficeLocation.js'
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'


// 1) --------------| Admin: Get All Users |--------------
export const carRental_Admin_Get_All_User = CatchAsync(async(req, res, next)=>{
    const users = await User.find();

    return res.status(200).json({
        success: true,
        users,
    });
})


// 2) --------------| Admin: Get Single User |--------------
export const carRental_Admin_Get_Single_User = CatchAsync(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
    }

    return res.status(200).json({
        success: true,
        user,
    });
})

// 3) --------------| Admin: User Role Update |--------------
export const carRental_Admin_User_Role_Update = CatchAsync(async(req, res, next)=>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }

    await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    return res.status(200).json({
        success: true,
    });
})

// 4) --------------| Admin: Delete User Account |--------------
export const carRental_Admin_Delete_User_Account = CatchAsync(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
    }

    await user.remove();

    return res.status(200).json({
        success: true
    });
})

// 5) --------------| Admin: Office Location Update |--------------
export const carRental_Admin_Office_Location_Register = CatchAsync( async(req, res, next) =>{
    const { address, city, state, country, pin, contact, email } = req.body;
    
    if( !address || !city || !state || !country || !pin || !contact || !email ){
        return res.send('Please enter details.')
    }

    const officeLocationExist = await OfficeLocation.findOne({email});
    if (officeLocationExist) {
        return next(new ErrorHandler("Office Location already exist", 400));
    }
    const officeLocation = await OfficeLocation.create({
        user: req.user.id,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pin: req.body.pin,
        contact: req.body.contact,
        email: req.body.email
    });

    return res.status(201).json({
        success: true,
        officeLocation,
    });
})