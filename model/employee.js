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
    Rol:{
        type: String,
        require: true
    },
    Gender:{
        type: String,
        require:true
    }
}, {timestamps: true})

const Employee = mongoose.model('employee', employeeSchema)
export default Employee