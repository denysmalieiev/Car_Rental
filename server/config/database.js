import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () =>{
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log(`Database connection successful`)
    })
}

export default connectDatabase;