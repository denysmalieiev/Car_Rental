import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max: 30,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            max: 30,
        },
        password: {
            type: String,
            required: true,
            min: 5,
            select: false
        },
        firstName:{
            type: String,
            min: 2,
            max: 30,
        },
        middleName:{
            type: String,
            min: 2,
            max: 30,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        profileSummary: {
            type: String,
            default: ''
        },
        address: {
            type:String,
            default: ''
        },
        city: {
            type:String,
            default: ''
        },
        state: {
            type:String,
            default: ''
        },
        country: {
            type:String,
            default: ''
        },
        pin: {
            type: Number,
        },
        countryCode: {
            type: Number,
        },
        contactNumber: {
            type: Number,
        },
        profilePicture: {
            public_id:{
                type: String
            },
            url:{
                type: String,
                default: 'https://yt3.ggpht.com/a/AATXAJyuoSvqXQn2lBeh1uo_CGeQtCtIEp4Ea76r2A=s900-c-k-c0xffffffff-no-rj-mo',
            }
        },
        role: {
            type: String,
            default: 'customer',
        },
        order: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
        ],
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
)

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password  = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.methods.correctPassword = async function(passwordProvided){
    return await bcrypt.compare(passwordProvided, this.password);
}

userSchema.methods.getResetPasswordToken = async function () {
    // generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // generate hash token and add to db
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

const User = mongoose.model('User', userSchema);
export default User;