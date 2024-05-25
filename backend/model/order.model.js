const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    orderId : {type : String, required : true },
    userId : {type : String, required : true },
    productName : {type : String, required : true },
    quantity : {type : String, required : true},
    price : {type : String, required : true},
    totalPrice : {type : String, required : true},
    status : {type : String},
})

const orderModel =mongoose.model("order",orderSchema)

module.exports=orderModel