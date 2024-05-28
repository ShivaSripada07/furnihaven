const { addProduct } =require('../controllers/addProduct');
const {getProduct}=require('../controllers/addProduct')
const express=require('express');
const routes=express.Router();

routes.post('/',addProduct);
routes.get('/:id',getProduct)

module.exports=routes;