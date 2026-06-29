import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    empcod:{
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    jobRole:{
        type: String,
        require: true
    },
    salary:{
        type: Number,
        require: true
    }
}, {timestamps: true})

const Employee = mongoose.model('employee', employeeSchema)
export default Employee