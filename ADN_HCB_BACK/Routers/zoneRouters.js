import express from 'express';
import { addZone, allZone, deleteSubZone, getSubZone } from '../Controller/zoneController.js';

const zoneRouter = express.Router();


zoneRouter.post('/addZone', addZone);
zoneRouter.get('/getSubZone/:name', getSubZone);
zoneRouter.get('/getZone', allZone);
zoneRouter.delete('/deleteSubZone/:id',deleteSubZone);


export default zoneRouter;