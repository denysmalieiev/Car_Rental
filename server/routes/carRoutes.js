import express from 'express';
import {
    carRental_Car_Registration,
    carRental_get_All_Cars,
    carRental_get_Single_Car,
} from '../controller/carController.js';
import authToken from '../utils/authToken.js';

const router = express.Router();

// Cars routes
router.route('/register').post(authToken.isUserAuthenticated, carRental_Car_Registration);
router.route('/all').get(authToken.isUserAuthenticated, carRental_get_All_Cars);
router.route('/:id').get(authToken.isUserAuthenticated, carRental_get_Single_Car);


export default router;