import { Schema, model } from "mongoose";

const zoneSchema = new Schema({
    zone_name:{
        type : String
    },
    sub_zone:{
        type:String
    }

},{timestamps : true})

export default model('Zone', zoneSchema);