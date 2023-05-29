import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mogran from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import errorMiddleware from './middlewares/error.js';

// Project Routes
import userAuthRoutes from './routes/userRoutes.js';
import carRoutes from './routes/carRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './config/config.env' });
}

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(fileUpload());
app.use(mogran("common"));
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(cors({credentials: true, origin:`http://localhost:3000`}));


// App route
app.use('/api/v1/user', userAuthRoutes);
app.use('/api/v1/cars', carRoutes);
app.use('/api/v1/order', orderRoutes);
// app.use('/api/v1/payment', paymentRoutes);
app.all('*', (req, res)=>{
    return res.send(`OPs something went wrong ${404}`);
})

// Middleware for error
app.use(errorMiddleware)


export default app;