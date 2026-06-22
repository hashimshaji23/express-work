import mongoose from "mongoose"

const userSchema = new mongoose.userSchema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true})

const user = mongoose.model('userData', userSchema)

export default user