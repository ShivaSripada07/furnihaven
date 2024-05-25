const express =require('express')
const routes=express.Router();

const {
    getProducts,
    productSave,
    productDelete,
    productEditData,
    productEditSave
}=require('../controllers/product.controller')

const {getOrders}=require('../controllers/order.controller')

routes.get('/',getProducts)
routes.post('/addProduct',productSave)
routes.delete('/delete/:id',productDelete)
routes.patch('/productEdit/:id',productEditSave)
routes.get('/productEdit/:id',productEditData)
routes.get('/orders',getOrders)

module.exports=routes