import mongoose from "mongoose";
import {redisConnection} from "../Caching/Caching"
export default class Database {
    constructor() {}

    async mongodbConnection() {
        try {
            let databaseURL: string | undefined = process.env.NODE_ENV === 'development' ? process.env.DATABASE_URL_DEVELOPMENT : process.env.DATABASE_URL_PRODUCTION;
            if (!databaseURL) {
                throw new Error('Database URL not found in environment variables');
            }
            await mongoose.connect(databaseURL, {
                socketTimeoutMS: 20000,
            });

            console.log("MongoDB connected successfully!...");
            return true;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.error("MongoDB disconnected");
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log("MongoDB connection closed due to app termination");
            return false;
        });
    }
    async cachingConnection() {
        try{
            const isCachingAvailable:any = await redisConnection();
            if(isCachingAvailable){
                return true
            }
            return false
        } catch(error:any){
            console.error("Error connecting to Redis:", error.toString())
            return false
        }
    }
}