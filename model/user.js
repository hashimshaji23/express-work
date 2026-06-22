import mongoose from "mongoose"

const userSchema = new mongoose.userSchema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

const user = mongoose.model('userData', userSchema)

export default user