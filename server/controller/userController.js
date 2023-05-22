import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import CatchAsync from '../middlewares/catchAsync.js'
import authToken from '../utils/authToken.js';
import mail from '../utils/sendEmail.js';
import crypto from 'crypto';
import cloudinary from 'cloudinary';

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
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });

    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        profilePicture: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
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


// 6) --------------| User Profile Update |--------------
export const carRental_User_Profile_Image_Update = CatchAsync(async(req, res, next)=>{

    const newUserData = {
        email: req.body.email,
    }

    if(req.body.profilePicture !== "") {
        const user = await User.findById(req.user.id);

        const imageId = user.profilePicture.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
        });

        newUserData.profilePicture = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        }
    }

    await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });

    return res.status(200).json({
        success: true,
    });
})

// 7) --------------| User Password Update |--------------
export const carRental_User_Password_Update = CatchAsync(async(req, res, next) => {

    const user = await User.findById(req.user.id).select('+password');
    const ispasswordMatch = await user.correctPassword(req.body.oldPassword, user.password);
    if(!ispasswordMatch){
        return next(new ErrorHandler('Old password is incorrect', 400))
    }
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler('Password not matched.', 400))
    }
    user.password = req.body.newPassword;
    await user.save();
    authToken.sendToken(user, 200, res)
})


// 8) --------------| User forgot password |--------------
export const carRental_User_Password_Forgot = CatchAsync(async(req, res, next)=>{
    const user = await UserModel.findOne({email: req.body.email})
    console.log(user)

    if(!user){
        return next(new ErrorHandler("User not found", 404));
    }
    // Get ResetPasswordToken
    const resetToken = await user.getResetPasswordToken();

    await user.save({validateBeforeSave: false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is:- \n\n ${resetPasswordUrl}, \n\n If you have not request this email then please ignore it.`;

    try{
        await mail.sendEmail({
            email: user.email,
            subject: 'Car Rental Account Password Reset',
            message,
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })
    } catch(err){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(err.message, 500))
    }
})

// 9) --------------| User password Reset |--------------
export const carRental_User_Password_Reset = CatchAsync(async(req, res, next)=>{
    
     // Creating token hash
     const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

     const user = await UserModel.findOne({
         resetPasswordToken,
         resetPasswordExpire: {$gt: Date.now()}
     })
 
     if(!user){
         return next(new ErrorHandler("Reset password token is invalid or has been expired", 404));
     }
 
     if(req.body.password !== req.body.confirmPassword){
         return next(new ErrorHandler("Password doesn't matched.", 404));
     }
 
     user.password = req.body.password;
     user.resetPasswordToken = undefined;
     user.resetPasswordExpire = undefined;
 
     await user.save()
     authToken.sendToken(user, 200, res)
})

// 10) --------------| User Account Delete |--------------
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