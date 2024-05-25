const express=require('express')
const routes=express.Router()

const {
    getUserProducts,
    saveProduct,
    getOrders,
    placeOrder
}=require('../controllers/order.controller')

routes.get('/:id',getUserProducts)
routes.post('/saveOrder',saveProduct)
routes.get('/orders',getOrders)
routes.post('/placeOrder',placeOrder)

module.exports=routes