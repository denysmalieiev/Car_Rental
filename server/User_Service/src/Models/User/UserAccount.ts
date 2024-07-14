import mongoose, { Schema, Document } from 'mongoose';
import crypto from "crypto";
import bcrypt from "bcryptjs";

// Define the UserAccount interface to represent the structure of an admin account
interface UserAccount extends Document {
    accountVerified: boolean
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;
}

// Define the AdminAccount schema
const UserAccountSchema: Schema = new Schema(
    {
        accountVerified: {type: Boolean, default: false},
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false },
        role: { type: String, default: 'user' },
        createdAt: { type: Date, default: Date.now },
        resetPasswordToken: { type: String },
        resetPasswordExpire: { type: Date }
    },
    {
        timestamps: true
    }
);

UserAccountSchema.pre("save", async function (this: UserAccount, next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

UserAccountSchema.methods.correctPassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);
};

UserAccountSchema.methods.getResetPasswordToken = async function (this: UserAccount) {
    // 1) generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // 2) generate hash token and add to db
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordExpire = new Date(Date.now() + 960000);
    return resetToken;
};

// Create and export the AdminAccount model based on the schema
const UserAccountModel = mongoose.model<UserAccount>('UserAccount', UserAccountSchema);

export default UserAccountModel;