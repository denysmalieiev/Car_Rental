import express from 'express';
import {
    carRental_Car_Details_Upload_By_Admin,
    carRental_get_All_Cars,
    carRental_get_Single_Car,
    carRental_Update_A_Car_Detail,
    carRental_Delate_A_Car_Uploaded,
} from '../controller/carController.js';
import authToken from '../utils/authToken.js';

const router = express.Router();

// Cars routes
router.route('/register').post(authToken.isUserAuthenticated, authToken.authorizedRoles('admin') , carRental_Car_Details_Upload_By_Admin);
router.route('/all').get(carRental_get_All_Cars);
router.route('/:id').get(carRental_get_Single_Car);

router.route('/detail/update/:id').patch(authToken.isUserAuthenticated, authToken.authorizedRoles('admin') , carRental_Update_A_Car_Detail);
router.route('/detail/delete/:id').delete(authToken.isUserAuthenticated, authToken.authorizedRoles('admin') , carRental_Delate_A_Car_Uploaded);


export default router;