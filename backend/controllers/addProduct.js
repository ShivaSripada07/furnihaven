const productModel = require('../model/product.model');
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const addProduct = async (req, res) => {
    const { productId, imageurl, productName, price, description, quantity } = req.body;
    console.log(req.body)
    try {
        await productModel.create({
            productId,
            imageurl,
            productName,
            price,
            description,
            quantity
        });
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding the product" });
    }
};
module.exports = { addProduct };
