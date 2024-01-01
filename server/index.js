import app from './app.js';
import server from 'http';
import User from './models/User.js'
import { Server } from "socket.io";
import connectDatabase from './config/database.js';
import cloudinary from 'cloudinary';
const PORT = process.env.PORT || 5000;
const serverInstance = server.createServer(app);
const io = new Server(serverInstance);
// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

connectDatabase()

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

io.on('connection', (socket) => {
    console.log('user connected...');
    socket.on('is_Username_Exist', async (username) => {
        let msg;
        let isUsername = await User.findOne({username: {$regex: username}});
        if (!isUsername) {
            msg = false
        } else {
            msg = true
        }
        io.emit('is_Username_Exist', msg);
    })

    socket.on('is_Email_Exist', async (email) => {
        let msg;
        const user = await User.findOne({email: {$regex: email}});
        if (!user) {
            msg = false
        } else {
            msg = true
        }
        io.emit('is_Email_Exist', msg);
    })

    socket.on('disconnect', () => { console.log('user disconnected'); });
    socket.on('disconnect', () => { console.log('user disconnected'); });
});

serverInstance.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`Yeah! Server is running at port: ${PORT}`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});