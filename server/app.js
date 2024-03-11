import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from 'http'
import { Server } from "socket.io";
import socketConnect from "./config/socketConnect.js";
import "dotenv/config";
import userAuthRoutes from "./routes/userAuthRoutes.js";
import userServiceRoutes from "./routes/userServiceRoutes.js"
import adminAuthRoutes from "./routes/adminAuthRoutes.js"
import adminServiceRoutes from "./routes/adminServiceRoutes.js"
import tokenRoutes from "./routes/tokenRoutes.js"
import dbConnect from "./config/dbConfig.js";
import userAuthMiddleware from "./middlewares/authMiddleware.js";
import adminAuthMiddleware from "./middlewares/adminAuthMiddlware.js"

const app = express();
const port = process.env.PORT;
const http_server=new http.createServer(app)
const io=new Server(http_server,{
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  },
})

let activeUsers = new Map();
socketConnect(io, activeUsers);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:4200"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

dbConnect();

app.use(morgan("dev"));
app.use("/api/v1/auth/user", userAuthRoutes);
app.use('/api/v1/auth/admin',adminAuthRoutes)
app.use("/api/v1/auth/token", tokenRoutes);
app.use("/api/v1/service/user",userAuthMiddleware,userServiceRoutes);
app.use("/api/v1/service/admin",adminAuthMiddleware,adminServiceRoutes);
http_server.listen(port, () => {
  console.log(`app running in port ${port}`);
});
