import { hashPassword,createJWT, comparePassword} from "../modules/auth"
import prisma from "../modules/db"

export const createNewUser = async (req,res)=>{
    const user = await prisma.user.create({
    data:{
        username:await req.body.username,
        password:await hashPassword(req.body.password)
    }
    })
    const token = createJWT(user)
    res.json({token})
}

export const SignIn = async(req,res)=>{
    const user =await prisma .user.findUnique({
        where :{
            username:req.body.username
        }
    })
    const isValid =await comparePassword(req.body.password,user.password)
    if(!isValid){
        res.status(401)
        res.json({message:"compared password is not valid"})
        return
    }
    const token =createJWT(user)
    res.json({token}) 
}
