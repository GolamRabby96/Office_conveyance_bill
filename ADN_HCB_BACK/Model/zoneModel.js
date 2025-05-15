import { Schema, model } from "mongoose";

const zoneSchema = new Schema({
 
},{timestamps : true})

export default model('Zone', zoneSchema);