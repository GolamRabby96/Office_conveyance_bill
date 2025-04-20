import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config"
import bodyParser from 'body-parser';
import cors from "cors";
import cookieParser from "cookie-parser";





const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())


const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;


// Connect to MongoDB

mongoose.connect(MONGOURL)
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send('hello FFMS');
});






//Non define routes

//Middleware for error

app.listen(PORT, () => { console.log(`App listening at port ${PORT}`) })