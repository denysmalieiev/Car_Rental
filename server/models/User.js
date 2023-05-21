import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            min: 2,
            max: 30,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
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
        address: String,
        city: String,
        state: String,
        country: String,
        pin: Number,
        contact: Number,
        profilePicture: {
            type: String,
            default: 'https://yt3.ggpht.com/a/AATXAJyuoSvqXQn2lBeh1uo_CGeQtCtIEp4Ea76r2A=s900-c-k-c0xffffffff-no-rj-mo',
        },
        occupation: String,
        role: {
            type: String,
            default: 'user',
            select: false
        },
        carBooked: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking',
            },
        ]
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

const User = mongoose.model('User', userSchema);

export default User;