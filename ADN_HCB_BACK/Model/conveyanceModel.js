import { Schema, model } from "mongoose";

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
    start_time: {
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
    preparer_id: {
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
            },
            approver_priority: {
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
    holiday_hour: {
        type: String,
    },
    holiday_amount: {
        type: Number,
        default: 0,
    },
    overtime_from: {
        type: String,
    },
    overtime_to: {
        type: String,
    },
    overtime_hour: {
        type: String,
    },
    overtime_amount: {
        type: String,
        default: '0',
    },
    Dinner_amount: {
        type: Number,
        default: 0,
    },
    // ---------------------------------------------------
    reject_note: {
        type: String,
        default: ""
    },
    reject_condition: {
        type: Boolean,
        default: false
    },
    amount_limit: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

export default model('Conveyance', conveyanceSchema)