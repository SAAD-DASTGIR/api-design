import prisma from "../modules/db";

export const getOneUpdate = async(req,res)=>{
    const update = await prisma.update.findUnique({
        where:{
            id:req.params.id
        }
    })
    res.json({
        data:update
    })
}

export const getUpdate = async(req,res)=>{
    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.id
        },
        include:{
            belongsTo:true,
            updates:true
        }
    })
    const updates = products.reduce((allUpdates,products)=>{
        return [...allUpdates,...products.updates]
    },[])
    res.json({
        data:updates
    })
}
export const createUpdate = async(req,res)=>{
    const product = await prisma.product.findUnique({
        where:{
            id:req.body.id
        }
    })
    if(!product){
        // res.status(404)
        return res.json({
            message:"product not found"
        })
    }
    const update = await prisma.update.create({
        data:req.body
    })
    res.json({
        data:update
    })
}
export const updateUpdate = async(req,res)=>{
    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,  
        },
        include:{
            updates:true
        }
    })
    const update = products.reduce((allUpdates,products)=>{
        return [...allUpdates,...products.updates]
    },[])
    const match = update.find((update)=>update.id===req.params.id)
    if(!match){
        return res.json({
            message:"update not found"
        })
    }
    const updated = await prisma.update.update({
        where:{
            id:req.params.id
        },
        data:req.body
    })
    res.json({
        data:updated
    })
}
export const deleteUpdate = async(req,res)=>{
    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.id,  
        },
        include:{
            updates:true
        }
    })
    const update = products.reduce((allUpdates,products)=>{
        return [...allUpdates,...products.updates]
    },[])
    const match = update.find((update)=>update.id===req.params.id)
    if(!match){
        return res.json({
            message:"update not found"
        })
    }
   const deleted = await prisma.update.delete({
       where:{
           id:req.params.id
       }
   })
   res.json({
       data:deleted
   })
}