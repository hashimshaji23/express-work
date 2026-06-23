import express from 'express'
const app = express()
import userRoute from './routes/userRoutes.js'
import dotenv from 'dotenv'
import connection from './config/db.js'


dotenv.config()

const port = process.env.PORT 

connection()

app.use(express.json())
app.use('/user', userRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

