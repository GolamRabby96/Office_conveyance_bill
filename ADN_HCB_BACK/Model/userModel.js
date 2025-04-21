import { Schema, model } from "mongoose";

const userSchema = new Schema({
    user_id:{
        type: String,
        require: true
    },
    user_name:{
        type: String,
        require: true
    },
    user_zone:{
        type: String,
        require: true
    },
    sub_zone:{
        type: String,
        require: true
    }, 
    next_responsible_person :{
        type: String,
        require: true
    },
    user_designation :{
        type: String,
        require: true
    },
    user_department:{
        type: String,
        require: true
    },
    user_access_level:{
        type: String,
        require: true
    },
    user_password:{
        type: String,
        require: true
    }

})

export default model('User',userSchema);