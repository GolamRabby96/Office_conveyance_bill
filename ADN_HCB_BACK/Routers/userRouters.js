import express from "express";
import { checkUser, createUer, deleteUser, getAllUser, getUserById, updateUser } from "../Controller/userController.js";

const userRouter = express.Router();

userRouter.post('/addUser', createUer);
userRouter.post('/findUser/:id', checkUser);

userRouter.get('/getAllUser', getAllUser);
userRouter.get('/getUser/:id', getUserById);

userRouter.put('/updateUser/:id', updateUser);

userRouter.delete('/deleteUser/:id', deleteUser);

export default userRouter;