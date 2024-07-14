import express, { Application, Request, Response } from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import API_Table from "./Utils/API_Table/API_Table";
import Database_Connection from './Utils/Connection/Database_Connection';
const envFilePath = `./configuration/project.env`;
dotenv.config({path: envFilePath});
const PORT: number = parseInt(process.env.PORT || '5000'); // Use default port 5000 if PORT is not defined

const app: Application = express();
const server = http.createServer(app);
const io: SocketIOServer = new SocketIOServer(server);
app.use(cors());
app.use(cookieParser());
app.use(express.json())

// Database instance creation then connecting database
const databaseConnection = new Database_Connection();
databaseConnection.mongodbConnection();
const isCachingAvailable = databaseConnection.cachingConnection()

// REST API endpoints
app.get('/user', (req: Request, res: Response) => {
  res.send('Hello, From Blue star appointment!');
});

app.use('/user/v1', API_Table);

// Socket.io events
io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg: string) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});