import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'

export const carRental_Admin_Get_All_User = CatchAsync(async(req, res, next)=>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
})

export const carRental_Admin_Get_Single_User = CatchAsync(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
})


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

    res.status(200).json({
        success: true,
    });
})

export const carRental_Admin_Delete_User_Account = CatchAsync(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404));
    }

    await user.remove();

    res.status(200).json({
        success: true
    });
})