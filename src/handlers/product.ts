import prisma from "../modules/db";
export const getProduct = async (req, res) => {
    const product =await prisma.product.findMany({
        where:{
            id:req.body.id
        },
        include:{
            belongsTo:true
        }
            
    })
    res.json({data:product})
    if (!product) {
        res.json({data:[]})
    }
    
}
export const getOneProduct =async(req,res)=>{
    const id =req.params.id
    const product =await prisma.product.findFirst({
        where:{
            id,
            belongsToId:req.user.id
        }
    })
    res.json({data:product})
    
}

export const createProduct = async (req,res)=>{
const product =await prisma.product.create({

    data:{
        name:req.body.name,
        belongsToId:req.user.id
    }
})
res.json({data:product})
}

export const updateProduct = async (req,res)=>{
    const updated = await prisma.product.update({
        where:{
            id_belongsToId:{

                id:req.params.id,
                belongsToId:req.user.id
            }
        },
        data:{
            name:req.body.name
        }

    })
    res.json({data:updated})
}

export const deleteProduct = async (req,res)=>{
    const deleted = await prisma.product.delete({
        where:{
            id_belongsToId:{

                id:req.params.id,
                belongsToId:req.user.id
            }
        }
    })
    res.json({data:deleted})
}