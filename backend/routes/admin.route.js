const { addProduct } =require('../controllers/addProduct');
const express=require('express')
const routes=express.Router();

routes.post('/',addProduct);

module.exports=routes;