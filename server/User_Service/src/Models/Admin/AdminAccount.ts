import mongoose, { Schema, Document } from 'mongoose';
import crypto from "crypto";
import bcrypt from "bcryptjs";

// Define the AdminAccount interface to represent the structure of an admin account
interface AdminAccount extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;
}

// Define the AdminAccount schema
const AdminAccountSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false },
        role: { type: String, default: 'admin' },
        createdAt: { type: Date, default: Date.now },
        resetPasswordToken: { type: String },
        resetPasswordExpire: { type: Date }
    },
    {
        timestamps: true
    }
);

AdminAccountSchema.pre("save", async function (this: AdminAccount, next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

AdminAccountSchema.methods.correctPassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);
};

AdminAccountSchema.methods.getResetPasswordToken = async function (this: AdminAccount) {
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
const AdminAccountModel = mongoose.model<AdminAccount>('AdminAccount', AdminAccountSchema);
export default AdminAccountModel;