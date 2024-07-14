import { Response, NextFunction } from 'express';
import { CustomRequest } from "../../../Utils/Authentication/authenticationInterface";
import { SignUpRequestDTO, SignInRequestDTO } from "../../DTO/Account.dto";
import { validate } from 'class-validator';
import UtilityFunction from "../../../Utils/Utility/utilityFunction";
import UserAuthentication from "../../../Utils/Authentication/authentications";
import UserAccountModel from "../../../Models/User/UserAccount";
import UserOTPModel from '../../../Models/User/UserOTP';

const utilityFeatures = new UtilityFunction();
const authentication = new UserAuthentication();

export default class UserProfileController {
    constructor() { }
    async userSignUp(req: CustomRequest, res: Response, next: NextFunction) {
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
            // Checking if the user already exists
            const duplicateValue: { success: boolean, message: string } = await utilityFeatures.checkingUserDuplicate(userSignUpRequest.email, userSignUpRequest.username);
            if (!duplicateValue.success) {
                return res.status(400).json({ message: duplicateValue.message });
            }
            // Generating OTP for user
            const otp: number = utilityFeatures.otpGenerator(4);
            if (messages.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: messages.join(" ")
                })
            } else {
                // Creating an instance of the UserAccountModel with the extracted data
                const newUser: any = await UserAccountModel.create({
                    username: userSignUpRequest.username,
                    email: userSignUpRequest.email,
                    password: userSignUpRequest.password,
                    otp: otp
                })
                // Find and update the UserOTP document or create a new one if it doesn't exist
                await UserOTPModel.findOneAndUpdate(
                    { user: newUser._id, reason: "account" }, // Query criteria
                    { user: newUser._id, otp: otp, reason: "account" }, // Update or create fields
                    { upsert: true, new: true } // Options: upsert creates if not found, new returns the updated document
                );
                const userId: string = newUser._id
                await authentication.userAuthenticationToken(res, userId);

                // Sending Mail to User

            }
            // Sending Success response
            res.status(200).json({
                success: true,
                message: "Account created successfully",
                otp
            })
        } catch (err: any) {
            // next(err);
            // Sending error response
            return res.status(400).json({
                success: false,
                message: err.toString()
            })
        }
    }
    async userSignIn(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Creating an instance of the SignInRequestDTO with the extracted data
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
            const user: any = await UserAccountModel.findOne({ email: userSignInRequest.email }).select("+password")
            if (!user || !(await user.correctPassword(userSignInRequest.password, user.password))) {
                return res.status(401).json({
                    success: false,
                    message: `Invalid credentials`
                })
            }
            const loginToken = await authentication.userAuthenticationToken(res, user?._id);
            if (!loginToken) {
                return res.status(401).json({
                    success: false,
                    message: `Invalid credentials`
                })
            }
            res.status(200).json({
                success: true,
                message: "Login successfully"
            })
        } catch (err) {
            next(err);
        }
    }
    async userSignOut(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Clear the cookie by setting its expiration date to the past
            res.clearCookie('userToken');
            res.status(200).json({
                success: true,
                message: "Sign out"
            })
        } catch (err) {
            next(err);
        }
    }
    async userAccountVerification(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            // Checking OTP Provided or not
            const otp = req.body.otp.toString();
            if (req.user?.accountVerified) {
                return res.status(200).json({
                    success: true,
                    message: "Account already verified"
                })
            }
            if (!otp) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide OTP"
                })
            }
            const userId: string = req.user?.id || " "
            const result = await UserOTPModel.findOne({ user: userId, reason: "account" });
            if (!result || !result.otp) {
                return res.status(400).json({
                    success: false,
                    message: "OTP is not valid"
                })
            }
            if (result.otp.toString() === otp) {
                await UserAccountModel.findByIdAndUpdate({ _id: userId }, { accountVerified: true }, { new: true })
                await UserOTPModel.findByIdAndDelete({ _id: result._id })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Wrong OTP"
                })
            }
            res.status(200).json({
                success: true,
                message: "Account Verified",
            })
        } catch (err) {
            next(err);
        }
    }
    async resendVerificationOTP(req: CustomRequest, res: Response, next: NextFunction) {
        try {
            if (!req.user?.id) {
                return res.status(401).json({
                    success: false,
                    message: "Please login again"
                })
            }
            const otp: number = utilityFeatures.otpGenerator(4);
            // Find and update the UserOTP document or create a new one if it doesn't exist
            await UserOTPModel.findOneAndUpdate(
                { user: req.user?.id, reason: "account" }, // Query criteria
                { user: req.user?.id, otp: otp, reason: "account" }, // Update or create fields
                { upsert: true, new: true } // Options: upsert creates if not found, new returns the updated document
            );
            res.status(200).json({
                success: true,
                message: "Account Verified"
            })
        } catch (err) {
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
            const user: any = await UserAccountModel.findById({ _id: req.user?.id }).select("+password")
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "User not found"
                })
            }
            // Checking saved and provided password are save or not
            const isPasswordMatch = await user.correctPassword(req.body.oldPassword)
            if (!isPasswordMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Old password is incorrect!"
                })
            }
            user.password = req.body.newPassword;
            await user.save();
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
            const user: any = await UserAccountModel.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "User not found"
                })
            }
            // Generate OTP
            const otp: number = utilityFeatures.otpGenerator(4);
            // Save OTP in DB
            // Find and update the UserOTP document or create a new one if it doesn't exist
            await UserOTPModel.findOneAndUpdate(
                { user: user._id, reason: "forgot" }, // Query criteria
                { user: user._id, otp: otp, reason: "forgot" }, // Update or create fields
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
            const user: any = await UserAccountModel.findOne({ email: req.body.email }).select("+password")
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "User not found"
                })
            }
            const result = await UserOTPModel.findOne({ user: user._id, reason: "forgot" });
            if (!result || !result.otp) {
                return res.status(400).json({
                    success: false,
                    message: "OTP is not valid"
                })
            }
            if (result.otp.toString() === req.body.otp.toString()) {
                await UserOTPModel.findByIdAndDelete({ _id: result._id })
                user.password = req.body.password
                await user.save()
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