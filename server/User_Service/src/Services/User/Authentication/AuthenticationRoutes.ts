import express from 'express';
import { parseJsonOrUrlEncoded, handleData } from '../../../Utils/middlewares/RequestBodyMiddleware';
import AuthenticationController from "./AuthenticationController";
import UserAuthentication from "../../../Utils/Authentication/authentications";

const UserController = new AuthenticationController();
const authentication = new UserAuthentication();

const router = express.Router();

// User Sign Up
router.route("/sign-up")
    .post(parseJsonOrUrlEncoded, handleData, UserController.userSignUp);

// User Sign In
router.route("/sign-in")
    .post(parseJsonOrUrlEncoded, handleData, UserController.userSignIn);

// User Sign Out
router.route("/sign-out")
    .put(UserController.userSignOut);

// User Account Verification
router.route("/account-verification")
    .put(parseJsonOrUrlEncoded, handleData, authentication.verifyAuthorization, UserController.userAccountVerification);

// User Account Verification
router.route("/resend-verification-code")
    .put(authentication.verifyAuthorization, UserController.resendVerificationOTP);

// User Password
router.route("/password-update")
    .put(parseJsonOrUrlEncoded, handleData, authentication.verifyAuthorization, UserController.passwordUpdate);

// Forgot Password
router.route("/forgot-password")
    .put(parseJsonOrUrlEncoded, handleData, UserController.forgotPassword);

// Reset Password
router.route("/reset-password")
    .put(parseJsonOrUrlEncoded, handleData, UserController.resetPasswordUpdate);

// // Admin Profile
// router.route("/profile")
//     .get(AdminController.adminProfileInformation)
//     .put(AdminController.adminProfileUpdate)
//     .delete(AdminController.adminProfileDelete)

export default router;