import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import authToken from '../utils/authToken.js';



// 1) --------------| User Registration |--------------
export const carRental_User_Registration = CatchAsync(async(req, res, next)=>{
    // a) Destructuring of data
    const {firstName, lastName, email, password} = req.body;
    // b) Checking if all required fields have been provided or not
    if(!firstName || !lastName || !email || !password){
        return res.send('Please enter details.')
    }
    // c) Checking if user already exist
    const userExist = await User.findOne({email})
    if(userExist){
        return res.send('User already exist.');
    }
    // d) If user is new then saving details in Database
    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        viewedProfile: 0,
        impressions:0,
    })
    // e) Sending response
    return res.status(200).json({
        success: true,
        message: 'User registed.',
        name: user.firstName+' '+user.lastName,
        email: user.email,
    })
})


// 2) --------------| User Login |--------------
export const carRental_User_Login = CatchAsync(async(req, res, next)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler(`Please enter email and password`, 400))
    }
    const userCheck  = await User.findOne({email}).select('+password');

    // a) Checking if user exist or password provided is correct or not
    if(!userCheck || !await userCheck.correctPassword(password)){
        return next(new ErrorHandler('Invalid email and password', 401))
    }
    // b) Calling token function to set cookie
    authToken.sendToken(userCheck, 200, res)
})


// 3) --------------| User Logout |--------------
export const carRental_User_Logout = CatchAsync(async(req, res, next)=>{
    const user = req.user.firstName+" "+req.user.lastName
    // a) first removing the cookie 
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    // b) then sending response
    res.status(200).json({
        success: true,
        message: `${user}, You are now logged out.`
    })
})


// 4) --------------| User Profile |--------------
export const carRental_User_Profile = CatchAsync(async(req, res) => {
    const user = await User.findById(req.user.id).sort({ createdAt: -1 })
    return res.status(200).json({
        success: true,
        user
    })
})


// 5) --------------| User Profile Update |--------------
export const carRental_User_Profile_Update = CatchAsync(async(req, res, next)=>{
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true,
        userFindAndModify: true
    });
    res.status(200).json({
        sucess: true,
        user,
    })
})


// 6) --------------| User Account Delete |--------------
export const carRental_User_Profile_Delete = CatchAsync(async(req, res, next)=>{
    const user = await User.findById(req.user.id);
    if(!user){
        return next(new ErrorHandler(`User does not exist.`))
    }
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    const deletedUser = await User.findByIdAndDelete(req.user.id)
    req.user=undefined
    res.status(200).json({
        suncess: true,
        message: 'User Deleted',
        deletedUser
    })
})


// 7) --------------| User Password Update |--------------
export const carRental_User_Password_Update = CatchAsync(async(req, res, next) => {
    console.log(req.body)
    const user = await User.findById(req.user.id).select('+password');
    const passwordMatch = await user.correctPassword(req.body.oldPassword, user.password);
    if(!passwordMatch){
        return next(new ErrorHandler('Old password is incorrect', 400))
    }
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler('Password not matched.', 400))
    }
    user.password = req.body.newPassword;
    await user.save();
    authToken.sendToken(user, 200, res)
})


// 8) User forgot password
export const carRental_User_Password_Forgot = CatchAsync(async(req, res, next)=>{
    return res.status(200).send(`User forgot password`)
})

// 9) User reset password function
export const carRental_User_Password_Reset = CatchAsync(async(req, res, next)=>{
    return res.status(200).send(`User password reset`)
})