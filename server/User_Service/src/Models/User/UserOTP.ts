import mongoose, { Schema, Document } from 'mongoose';

// Define the UserAccount interface to represent the structure of an admin account
interface UserOTP extends Document {
    user: string;
    reason: string;
    otp: number;
}

// Define the AdminAccount schema
const UserOTPSchema: Schema = new Schema(
    {
        user: { type: String, required: true },
        reason: { type: String, required: true, enum: ["account"]},
        otp: { type: String, required: true },
        createdAt: { type: Date, expires: 900, default: Date.now } // expires in 15 minutes (900 seconds)
    },
    {
        timestamps: true
    }
);

// Create and export the AdminAccount model based on the schema
const UserOTPModel = mongoose.model<UserOTP>('UserOTP', UserOTPSchema);

export default UserOTPModel;