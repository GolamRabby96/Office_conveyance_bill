import { Schema, model } from "mongoose";

// const Approver_model = new Schema({

// })

const conveyanceSchema = new Schema({
    date: {
        type: Date,
        require: true
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
        type: String,
        require: true
    },
    to_location: {
        type: String,
        require: true
    },
    ticket_id: {
        type: String,
        require: true
    },
    pop_or_customer_name: {
        type: String,
        require: true
    },
    transport: {
        type: String,
        require: true
    },
    conveyance_amount: {
        type: String,
        require: true
    },
    remarks: {
        type: String,
        require: true
    },
    preparer_by: {
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
    reject_note: {
        type: String,
        default: ""
    }

}, { timestamps: true })

export default model('Conveyance', conveyanceSchema)