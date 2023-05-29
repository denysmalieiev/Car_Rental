import express from 'express';
const router = express.Router();
import {
    carRental_User_Order_Creation,
    carRental_User_Single_Order,
    carRental_User_All_Orders,
    carRental_User_Cancel_A_Order,
    carRental_Admin_Users_All_Orders,
    carRental_Admin_Update_User_Order,
} from '../controller/orderController.js';
import authToken from '../utils/authToken.js';

// Order routes
router.route('/user/new').post(authToken.isUserAuthenticated, carRental_User_Order_Creation);
router.route('/user/all').get(authToken.isUserAuthenticated, carRental_User_All_Orders);
router.route('/user/:id').get(authToken.isUserAuthenticated, carRental_User_Single_Order);
router.route('/cancel/:id').get(authToken.isUserAuthenticated, carRental_User_Cancel_A_Order)

// Admin
router.route('/admin/all').get(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), carRental_Admin_Users_All_Orders);
router.route('/admin/update/:id').patch(authToken.isUserAuthenticated, authToken.authorizedRoles('admin'), carRental_Admin_Update_User_Order);

export default router;