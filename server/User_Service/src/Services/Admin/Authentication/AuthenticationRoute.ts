import express from 'express';
import AdminProfileController from './AuthenticationController';
import { parseJsonOrUrlEncoded, handleData } from '../../../Utils/middlewares/RequestBodyMiddleware';
import AdminAuthentication from "../../../Utils/Authentication/authentications";

const AdminController = new AdminProfileController();
const authentication = new AdminAuthentication();

const router = express.Router();

// Admin Sign Up
router.route("/sign-up")
    .post(parseJsonOrUrlEncoded, handleData, AdminController.adminSignUp);

// Admin Sign In
router.route("/sign-in")
    .post(parseJsonOrUrlEncoded, handleData, AdminController.adminSignIn);

// Admin Sign Out
router.route("/sign-out")
    .put(AdminController.adminSignOut);

// Admin Sign Out
router.route("/password-update")
    .put(parseJsonOrUrlEncoded, handleData, authentication.verifyAdminAuthorization, AdminController.passwordUpdate);

// Admin Sign Out
router.route("/forgot-password")
    .put(parseJsonOrUrlEncoded, handleData, AdminController.forgotPassword);

// Admin Sign Out
router.route("/reset-password")
    .put(parseJsonOrUrlEncoded, handleData, AdminController.resetPasswordUpdate);


export default router;