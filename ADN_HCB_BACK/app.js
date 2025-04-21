import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config"
import bodyParser from 'body-parser';
import cors from "cors";
import cookieParser from "cookie-parser";
import zoneRouter from "./Routers/zoneRouters.js"
import userRouter from "./Routers/userRouters.js";




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://192.168.12.13:9443', 'http://202.51.190.244:9443', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization']
}))


const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;


// Connect to MongoDB

mongoose.connect(MONGOURL)
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send('hello HCB');
});


app.use(zoneRouter);
app.use(userRouter);

console.log("called");


//Non define routes

//Middleware for error

app.listen(PORT, () => { console.log(`App listening at port ${PORT}`) })