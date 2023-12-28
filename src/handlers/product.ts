import prisma from "../modules/db";
export const getProduct = async (req, res) => {
    const user =await prisma.user.findUnique({
        where:{
            id:req.body.id
        },
        include:{
            products:true
        }
            
    })
}