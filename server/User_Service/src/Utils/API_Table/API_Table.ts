import express from 'express';
import AdminRoutes from '../../Services/Admin/Authentication/AuthenticationRoute';
import UserRoutes from "../../Services/User/Authentication/AuthenticationRoutes"
const router = express.Router();


router.use("/", UserRoutes)
router.use("/admin", AdminRoutes)

export default router;