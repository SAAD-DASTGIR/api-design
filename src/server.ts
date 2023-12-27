import express from 'express'
import router from './router'
import morgan from 'morgan'
import { createNewUser,SignIn } from './handlers/user'
import { protect } from './modules/auth'

const app=express()
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    console.log("Express is running")
    res.status(200)
    res.json({message:"heloo "})
})
app.use('/api',protect,router)
app.use(express.json())
app.post('/user',createNewUser)
app.post('/signin',SignIn)
export default app    