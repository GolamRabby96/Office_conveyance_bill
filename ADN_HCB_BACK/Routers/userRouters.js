import express from "express";
import { createUer, getAllUser, getUserById } from "../Controller/userController.js";

const userRouter = express.Router();

userRouter.post('/addUser', createUer);
userRouter.get('/getAllUser', getAllUser);
userRouter.get('/getUser/:id', getUserById);

export default userRouter;