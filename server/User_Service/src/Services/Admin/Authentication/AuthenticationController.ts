import { Response, NextFunction } from 'express';
import { CustomRequest } from "../../../Utils/Authentication/authenticationInterface";
import { SignUpRequestDTO, SignInRequestDTO } from "../../DTO/Account.dto";
import { validate } from 'class-validator';
import UtilityFunction from "../../../Utils/Utility/utilityFunction";
import UserAuthentication from "../../../Utils/Authentication/authentications";
import AdminAccountModel from "../../../Models/Admin/AdminAccount";
import UserOTPModel from '../../../Models/User/UserOTP';

const utilityFeatures = new UtilityFunction();
const authentication = new UserAuthentication();

export default class AdminProfileController {
    constructor() { }

    async adminSignUp(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Creating an instance of the SignUpRequestDTO with the extracted data
            const userSignUpRequest: SignUpRequestDTO = new SignUpRequestDTO(req.body);
            let messages: (string | undefined)[] = [];
            // Checking validation error if any
            await validate(userSignUpRequest).then(errors => {
                if (errors.length > 0) {
                    messages = errors.map((error, indx: number) => {
                        const capitalizedConstraints: any = error.constraints;
                        let error_message = Object.values(capitalizedConstraints);
                        let message = error_message.map((msg: any, index: number) => {
                            return msg.charAt(0).toUpperCase() + msg.slice(1) + "."
                        }).join(` `);
                        if (error.property === 'username') {
                            return message;
                        }
                        else if (error.property === 'email') {
                            return message;
                        }
                        else if (error.property === 'password') {
                            return message;
                        } else {
                            return undefined;
                        }
                    })
                }
            });
            if (messages.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: messages.join(" ")
                })
            } else {
                const newAdmin: any = await AdminAccountModel.create(userSignUpRequest)
                const userId: string = newAdmin._id
                await authentication.userAuthenticationToken(res, userId, 'adminToken');
            }

            res.status(200).json({
                success: true,
                message: 'Admin Sign Up.'
            });
        }
        catch (err: any) {
            // next(err);
            return res.status(400).json({
                success: false,
                message: err.toString()
            })
        }
    }
    async adminSignIn(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Creating an instance of the SignUpRequestDTO with the extracted data
            const userSignInRequest: SignInRequestDTO = new SignInRequestDTO(req.body);
            let messages: (string | undefined)[] = [];
            // Checking validation error if any
            await validate(userSignInRequest).then(errors => {
                if (errors.length > 0) {
                    messages = errors.map((error, indx: number) => {
                        const capitalizedConstraints: any = error.constraints;
                        let error_message = Object.values(capitalizedConstraints);
                        let message = error_message.map((msg: any, index: number) => {
                            return msg.charAt(0).toUpperCase() + msg.slice(1) + "."
                        }).join(` `);
                        if (error.property === 'email') {
                            return message;
                        }
                        else if (error.property === 'password') {
                            return message;
                        } else {
                            return undefined;
                        }
                    })
                }
            });
            if (messages.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: messages.join(" ")
                })
            }
            const admin: any = await AdminAccountModel.findOne({ email: userSignInRequest.email }).select("+password")
            if (!admin || !(await admin.correctPassword(userSignInRequest.password))) {
                return res.status(401).json({
                    success: false,
                    message: `Invalid credentials`
                })
            }
            const loginToken = await authentication.userAuthenticationToken(res, admin?._id, "adminToken");
            if (!loginToken) {
                return res.status(401).json({
                    success: false,
                    message: `Invalid credentials`
                })
            }
            res.status(200).json({
                success: true,
                message: 'Admin Sign In.'
            });
        }
        catch (err) {
            next(err);
        }
    }
    async adminSignOut(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Clear the cookie by setting its expiration date to the past
            res.clearCookie('adminToken');
            res.status(200).json({
                success: true,
                message: 'Admin Sign Out.'
            });
        }
        catch (err) {
            next(err);
        }
    }
    async passwordUpdate(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            if (!req.body || !req.body.oldPassword || !req.body.newPassword) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide password"
                })
            }
            const admin: any = await AdminAccountModel.findById({ _id: req.admin?.id }).select("+password")
            if (!admin) {
                return res.status(400).json({
                    success: false,
                    message: "Admin not found"
                })
            }
            // Checking saved and provided password are save or not
            console.log("fh")
            const isPasswordMatch = await admin.correctPassword(req.body.oldPassword)
            if (!isPasswordMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Old password is incorrect!"
                })
            }
            console.log()
            admin.password = req.body.newPassword;
            await admin.save();
            res.status(200).json({
                success: true,
                message: "Password Update",
            })
        } catch (err: any) {
            return res.status(400).json({
                success: false,
                message: err.toString()
            })
        }
    }
    async forgotPassword(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            if (!req.body || !req.body.email) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide email"
                })
            }
            const admin: any = await AdminAccountModel.findOne({ email: req.body.email })
            if (!admin) {
                return res.status(400).json({
                    success: false,
                    message: "Admin not found"
                })
            }
            // Generate OTP
            const otp: number = utilityFeatures.otpGenerator(4);
            // Save OTP in DB
            // Find and update the UserOTP document or create a new one if it doesn't exist
            await UserOTPModel.findOneAndUpdate(
                { user: admin._id, reason: "forgot" }, // Query criteria
                { user: admin._id, otp: otp, reason: "forgot" }, // Update or create fields
                { upsert: true, new: true } // Options: upsert creates if not found, new returns the updated document
            );

            // Sending email

            // Sending response
            res.status(200).json({
                success: true,
                message: "OTP sent to your email",
                OTP: otp
            })

        } catch (err: any) {
            // Sending error response
            return res.status(400).json({
                success: false,
                message: err.toString()
            })
        }
    }
    async resetPasswordUpdate(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Checking OTP Provided or not
            if (!req.body.email || !req.body.otp || !req.body.password) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide all details!"
                })
            }
            const admin: any = await AdminAccountModel.findOne({ email: req.body.email }).select("+password")
            if (!admin) {
                return res.status(400).json({
                    success: false,
                    message: "Admin not found"
                })
            }
            const result = await UserOTPModel.findOne({ user: admin._id, reason: "forgot" });
            if (!result || !result.otp) {
                return res.status(400).json({
                    success: false,
                    message: "OTP is not valid"
                })
            }
            if (result.otp.toString() === req.body.otp.toString()) {
                await UserOTPModel.findByIdAndDelete({ _id: result._id })
                admin.password = req.body.password
                await admin.save()
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Wrong OTP"
                })
            }
            // Sending error response
            return res.status(200).json({
                success: true,
                message: `Account recovered successfully!`
            })
        } catch (err: any) {
            // Sending error response
            return res.status(400).json({
                success: false,
                message: err.toString()
            })
        }
    }
}