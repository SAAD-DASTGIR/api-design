import {Router} from 'express'
import {body,oneOf,validationResult} from 'express-validator'
import { ErrorHandler } from './modules/middleware'
const router = Router()

router.get('/product',(req,res)=>{
    res.json({message:"heloo "}) 
})
router.get('./product:id',(()=>{}))
router.post('./product',()=>{})
router.put('/product/:id',body('name').isString(),ErrorHandler,(req,res)=>{
   
    
})
router.delete('./product:id',()=>{})

router.get('./update',()=>{})
router.get('./update:id',()=>{})
router.post('./update',
    body('title').exists().isString(),
    body('body').exists().isString(),
()=>{})
router.put('./update:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(
        [body('INPROGRESS'),
        body('SHIPPED'),
        body('DEPRICIATED')]),
    body('version').optional(),
()=>{})
router.delete('./update:id',()=>{})


router.get('./updatepoint',()=>{})
router.get('./updatepoint:id',(()=>{}))
router.post('./updatepoint',(
    body('name').optional().isString(),
    body('description').optional().isString()
),()=>{})
router.put('./updatepoint:id',(
    body('name').isString(),
    body('description').isString(),
    body('updateid').exists().isString(
)),()=>{})
router.delete('./updatepoint',()=>{})
export default router 