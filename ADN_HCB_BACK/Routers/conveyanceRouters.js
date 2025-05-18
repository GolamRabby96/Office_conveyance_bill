import express from 'express'
import { addConveyance, deleteConveyanceBill, getConveyance, getPendingList, getSingleConveyanceBill, groupCollection, rejectConvenceBill, updateMultipleId, updateSingleConveyance } from '../Controller/conveyanceController.js';

const conveyanceRouter = express.Router();

conveyanceRouter.post('/addConveyance', addConveyance);
conveyanceRouter.post('/getConveyance/:id', getConveyance);
conveyanceRouter.post('/updateMultipleId', updateMultipleId);
conveyanceRouter.post('/rejectConvenceBill/:id', rejectConvenceBill);
conveyanceRouter.post('/groupConCollection', groupCollection);

conveyanceRouter.put('/updateSingleConveyance/:id', updateSingleConveyance);

conveyanceRouter.get('/pendingList/:id', getPendingList);
conveyanceRouter.get('/singleConveyance/:id', getSingleConveyanceBill);


conveyanceRouter.delete('/deleteConveyance/:id', deleteConveyanceBill);

export default conveyanceRouter;