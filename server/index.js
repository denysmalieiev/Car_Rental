import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import helmet from 'helmet';
import mogran from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import errorMiddleware from './middlewares/error.js';
import userAuthRoutes from './routes/authRoutes.js';
import carRoutes from './routes/carRoutes.js';

// Configurations 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: './config.env'});
const app = express();
app.use(express.json())
app.use(cookieParser());
// app.use(bodyParser.json({limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(mogran("common"));
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(cors({credentials: true, origin:`http://localhost:3000`}));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// File Storage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

// below variable use for file upload
const upload = multer({storage})


// App route
app.get('/', (req, res)=>{
    return res.send('Welcome')
})
app.use('/api/v1/user', userAuthRoutes);
app.use('/api/v1/cars', carRoutes);
app.all('*', (req, res)=>{
    return res.send(`OPs something went wrong ${404}`);
})

// Middleware for error
app.use(errorMiddleware)

// Mongoose setup
const PORT = process.env.PORT || 5000;
const dbName = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(dbName ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`Yep! Database connected...`)
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT, ( err)=>{
    if(err) console.log(err)
    console.log(`Yeah! Server is running at port: ${PORT}`)
})