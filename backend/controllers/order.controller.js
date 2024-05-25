const cartModel = require('../model/cart.model');
const orderModel=require('../model/order.model')
const productModel=require('../model/product.model')


const getUserProducts= async (req,res)=>{
    try{
        const userId=req.params.id;
        console.log(userId)
        const orderProducts= await orderModel.find({"userId" : userId})
        if(orderProducts.length>0)
            res.status(200).json(orderProducts)
        else
            res.status(404).json({"message" : "orders not placed"})
    }
    catch(error){
        res.status(404).send(error)
    }
}

const getOrders= async (req,res)=>{
    try{
        const userId =req.user.username;
        const orders= await orderModel.find({"userId" : userId})
        if(orders.length>0)
            res.status(200).json(orders)
        else
            res.status(404).json({"message" : "orders not placed"})
    }
    catch(error){
        console.error(error)
        res.status(404).json({"message" : "error"})
    }
}

const saveProduct= async(req,res)=>{
    try{
        const userId=req.user.username;
        const cartItems= await cartModel.find({"userId" : userId})
        // console.log(cartItems)
        cartItems.forEach(async (item)=>{
            const orderId=req.user.username;
            const productName=item.productName;
            const quantity =item.quantity;
            const price =item.price;
            const status="Accepted";
            const totalPrice= parseInt(quantity) * parseInt(price);
            
            await orderModel.create({
                "orderId" : orderId,
                "userId" : userId,
                "productName" : productName,
                "quantity" : quantity,
                "totalPrice" : totalPrice,
                "status" : status,
                "price" : price,
            })
        })
        if(cartItems.length >0)
            res.status(200).json(cartItems)
        else
            res.status(404).json({"message" : "No items in cart"})
        
    }
    catch(error){
        //console.error(error)
        res.status(404).send(error)
    }
}


const placeOrder= async(req,res)=>{
    try{
        const userId=req.user.username;
        console.log(userId)
        await orderModel.updateMany({"userId":userId},{$set : {"status" : "ordered"}})
        res.status(200).json({"message" : "orders placed"})
    }
    catch(error){
        console.log(error)
        res.status(404).send({"message" : "error in placing order"})
    }
}

module.exports={
    getUserProducts,
    saveProduct,
    getOrders,
    placeOrder
}