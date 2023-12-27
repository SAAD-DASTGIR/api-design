import { validationResult } from "express-validator";

export const ErrorHandler=(req,res,next)=>{
const errors=validationResult(req)
console.log(errors)
if(!errors.isEmpty()){
    res.status(401)
    res.json({error:errors.array()})
}
else{
    next()
}}