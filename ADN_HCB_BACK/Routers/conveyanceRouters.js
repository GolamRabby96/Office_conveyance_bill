import express from 'express'
import { addConveyance, getConveyance } from '../Controller/conveyanceController.js';

const conveyanceRouter = express.Router();

conveyanceRouter.post('/addConveyance', addConveyance);
conveyanceRouter.post('/getConveyance', getConveyance);

export default conveyanceRouter;