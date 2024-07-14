import express from 'express';
import UserRoutes from "../../Services/User/Authentication/AuthenticationRoutes"
const router = express.Router();

// User Routes
router.use("/", UserRoutes)

export default router;