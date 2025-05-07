import express from 'express'
import { addConveyance, getConveyance, getPendingList, rejectConvenceBill, updateMultipleId } from '../Controller/conveyanceController.js';

const conveyanceRouter = express.Router();

conveyanceRouter.post('/addConveyance', addConveyance);
conveyanceRouter.post('/getConveyance', getConveyance);
conveyanceRouter.post('/updateMultipleId', updateMultipleId);
conveyanceRouter.post('/rejectConvenceBill/:id', rejectConvenceBill);

conveyanceRouter.get('/pendingList/:id', getPendingList);
export default conveyanceRouter;