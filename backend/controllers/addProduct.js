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
const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findOne({ "productId": productId });

        if (!product) {
            return res.status(404).json({ "message": "Product not found" });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ "message": "Failed to get product", "error": error.message });
    }
};

module.exports = { addProduct,getProduct };
