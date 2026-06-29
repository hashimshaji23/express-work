import User from "../model/user.js";
import user from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


export const Register = async (req, res, next)=>{

    try{
        const {name, email, phone, password, role} = req.body
        console.log(req.body)

        if(!email){
            console.log("Email is required");
        }
        const existingEmail = await user.findOne({email})
        if(existingEmail){
            console.log("user alredy exists");
        }
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new user({name, email, phone, password: hash})
        const saveUser = await newUser.save()
        res.status(200).json({
            status: true,
            message: "successfull",
            data: saveUser
        })

    }catch(err){
        console.log("err", err)
    }
}

export const login = async (req, res, next)=>{
    try{
        const {email, password} = req.body
        if(!email){
            console.log("email is require")
        } else {
           const user = await User.findOne({email})
           if(!user){
            console.log("Invalid email")
           } else {
            const isPassword = await bcrypt.compare(
                req.body.password, user.password
            )
            if(isPassword) {
                const token = jwt.sign(
                    {userId: user._id, userEmail: user.email},
                    process.env.jwt_SECRET,
                    {expiresIn: process.env.JWT_TOKEN_EXPIRY}
                );
                res.status(200).json({
                    status: true,
                    message: "successfull",
                    data: null,
                    result: user,
                    access_token: token
                })
            }
           }
        }

    }catch(err){
        console.log(err)
    }
}