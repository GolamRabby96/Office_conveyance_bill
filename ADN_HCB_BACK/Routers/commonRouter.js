import express from 'express'
import { rejectList } from '../Controller/commonController.js';


const commonRouter = express.Router();

commonRouter.get('/rejectList/:id',rejectList);

export default commonRouter;