import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'

export const carRental_Admin_Get_All_User = CatchAsync(async(req, res, next)=>{
    res.send('All User')
})

export const carRental_Admin_Get_Single_User = CatchAsync(async(req, res, next)=>{
    res.send('Single User')
})


export const carRental_Admin_User_Role_Update = CatchAsync(async(req, res, next)=>{
    res.send('Role update')
})

export const carRental_Admin_Delete_User_Account = CatchAsync(async(req, res, next)=>{
    res.send('Delete User')
})