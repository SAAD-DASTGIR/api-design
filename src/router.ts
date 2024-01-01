import {Router} from 'express'
import {body,oneOf,validationResult} from 'express-validator'
import { ErrorHandler } from './modules/middleware'
import { createProduct, deleteProduct, getOneProduct, getProduct } from './handlers/product'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdate, updateUpdate } from './handlers/update'
const router = Router()

router.get('/product',getProduct)
router.get('/product/:id',getOneProduct)
router.post('/product',body('name').isString(),ErrorHandler,createProduct)
router.put('/product/:id',body('name').isString(),ErrorHandler,(req,res)=>{
})
router.delete('/product/:id',deleteProduct)

router.get('/update',getUpdate)
router.get('/update/:id',ErrorHandler,getOneUpdate)
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
createUpdate)
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(
        [body('INPROGRESS'),
        body('SHIPPED'),
        body('DEPRICIATED')]),
    body('version').optional(),
updateUpdate)
router.delete('/update/:id',deleteUpdate)


router.get('/updatepoint',()=>{})
router.get('/updatepoint:id',(()=>{}))
router.post('/updatepoint',(
    body('name').optional().isString(),
    body('description').optional().isString()
),()=>{})
router.put('/updatepoint:id',(
    body('name').isString(),
    body('description').isString(),
    body('updateid').exists().isString(
)),()=>{})
router.delete('/updatepoint',()=>{})
export default router 
