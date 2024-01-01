import express from 'express'
import router from './router'
import morgan from 'morgan'
import { createNewUser,SignIn } from './handlers/user'
import { protect } from './modules/auth'

const app=express()
app.use(express.json())
app.use(morgan('dev'))
app.get('/',(req,res)=>{
    console.log("Express is running")
    res.status(200)
    res.json({message:"heloo "})
})
app.use('/api',protect,router)
app.post('/user',createNewUser)
app.post('/signin',SignIn)
app.use((err,req,res,next)=>{
    if (err.type==='auth'){
        res.status(401)
        res.json({message:"unable to authenticate"})
    }
    if(err.type==='input'){
        res.status(400)
        res.json({message:"validation error/invalid input"})
    }
    else   {
        res.status(500)
        res.json({message:"internal server error"})
    }
})
export default app    