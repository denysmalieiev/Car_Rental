import express from 'express';
import {
    carRental_User_Registration,
    carRental_User_Login,
    carRental_User_Logout,
    carRental_User_Profile,
    carRental_User_Profile_Update,
    carRental_User_Profile_Delete,
    carRental_User_Password_Update,
    carRental_User_Password_Forgot,
    carRental_User_Password_Reset,
} from '../controller/userController.js';

import {
    carRental_Admin_Get_All_User,
    carRental_Admin_Get_Single_User,
    carRental_Admin_User_Role_Update,
    carRental_Admin_Delete_User_Account,
    carRental_Admin_Office_Location_Register
} from '../controller/adminController.js';

import authToken from '../utils/authToken.js';

const router = express.Router();

// User authentication routes
router.route('/signup').post(carRental_User_Registration);
router.route('/login').post(carRental_User_Login);
router.route('/logout').get(authToken.isUserAuthenticated, carRental_User_Logout);

// User Profile routes
router.route('/profile').get(authToken.isUserAuthenticated, carRental_User_Profile);
router.route('/profile/update').patch(authToken.isUserAuthenticated, carRental_User_Profile_Update);
router.route('/profile/delete').delete(authToken.isUserAuthenticated, carRental_User_Profile_Delete);

// User Password routes
router.route('/password/update').put(authToken.isUserAuthenticated, carRental_User_Password_Update);
router.route('/password/forgot').post(authToken.isUserAuthenticated, carRental_User_Password_Forgot);
router.route('/password/reset/:token').post(authToken.isUserAuthenticated, carRental_User_Password_Reset);

// Admin
router.route("/admin/users").get(authToken.isUserAuthenticated, authToken.authorizedRoles("admin"), carRental_Admin_Get_All_User);
router.route("/admin/user/:id")
    .get(authToken.isUserAuthenticated, authToken.authorizedRoles("admin"), carRental_Admin_Get_Single_User)
    .put(authToken.isUserAuthenticated, authToken.authorizedRoles("admin"), carRental_Admin_User_Role_Update)
    .delete(authToken.isUserAuthenticated, authToken.authorizedRoles("admin"), carRental_Admin_Delete_User_Account);

router.route("/admin/office/register").get(authToken.isUserAuthenticated, authToken.authorizedRoles("admin"), carRental_Admin_Office_Location_Register);


export default router;