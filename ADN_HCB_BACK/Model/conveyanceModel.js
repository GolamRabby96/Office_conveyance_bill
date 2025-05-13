import { Schema, model } from "mongoose";

// const Approver_model = new Schema({

// })

const conveyanceSchema = new Schema({
    date: {
        type: Date
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    start_Time: {
        type: String,
        require: true
    },
    end_time: {
        type: String,
        require: true
    },
    from_location: {
        type: String
    },
    to_location: {
        type: String
    },
    ticket_id: {
        type: String,
        require: true
    },
    pop_or_customer_name: {
        type: String
    },
    transport: {
        type: String
    },
    conveyance_amount: {
        type: Number,
        default: 0,
    },
    remarks: {
        type: String
    },
    preparer_by: {
        type: String,
        require: true
    },
    preparer_id:{
        type: String,
        require: true
    },
    preparer_Zone: {
        type: String,
        require: true
    },
    Approver_list: [
        {
            approver_name: {
                type: String
            },
            approver_id: {
                type: String
            },
            approver_designation: {
                type: String
            }
        }
    ],

    next_approver: {
        type: String,
        require: true
    },
    next_responsible_person: {
        type: String,
        require: true
    },
    next_responsible_person_id: {
        type: String,
        require: true
    },
    // ---------------------------------------------------
    holiday_hour:{
        type: String,
    },
    holiday_amount:{
        type: Number,
        default: 0,
    },
    overtime_from:{
        type: String,
    },
    overtime_to:{
        type: String,
    },
    overtime_hour:{
        type: Number,
    },
    overtime_amount:{
        type: Number,
        default: 0,
    },
    Dinner_amount:{
        type: Number, 
        default: 0,
    },
    // ---------------------------------------------------
    reject_note: {
        type: String,
        default: ""
    },


}, { timestamps: true })

export default model('Conveyance', conveyanceSchema)