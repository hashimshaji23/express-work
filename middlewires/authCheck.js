import jwt from 'jsonwebtoken'
import moduleName from '../model/user.js'

const authChec = async (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next()
    } else {
        try {
            const token = req.headers.authorization.split(" ")[1]

            if (!token) {
                console.log("autentication failed");
            } else {
                const decodedToken = jwt.verify(token, process.env.jwt_SECRET)
                const validUser = await moduleName.findById(decodedToken.userId)
                console.log("validUser", validUser);
                if (!validUser) {
                    console.log("user not found");
                } else {
                    req.userDetails = { userId: decodedToken.userId, userRole: decodedToken.userRole }
                    next()
                }


            }
        } catch (err) {
            console.log(err)
        }

    }
}

export default authChec;