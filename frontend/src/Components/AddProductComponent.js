import '../styles/AddProductComponent.css';
import {useState} from 'react';
import './logo.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function ProductComponent()
{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [url,setUrl]=useState('');
    const [quantity,setQuantity]=useState('');
    const navigate=useNavigate();
    function handleName(e)
    {
        setName(e.target.value);
        console.log(e.target.value);
    }
    function handlePrice(e)
    {
        setPrice(e.target.value);
        console.log(e.target.value);
    }
    function handleDescription(e)
    {
        setDescription(e.target.value);
        console.log(e.target.value);
    }
    function handleUrl(e)
    {
        setUrl(e.target.value);
        console.log(e.target.value);

    }
    function handleQuantity(e)
    {
        setQuantity(e.target.value);
        console.log(e.target.value);
    }
    async function handleClick()
    {
        try{
            await axios.post(`http://localhost:3421/products`,{"imageurl":url,"name":name,"description":description});
        }
        catch(err)
        {
            console.log(err);
        }
        window.alert("Product Added Successfully");
        navigate('/admin');
    }
    return(
        <>
        <div id="signupBox">
        <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
        <input id="productname" type="text" value={name} onChange={handleName} required placeholder="Product Name" />
        <input id="productprice" type="text" value={price} onChange={handlePrice} placeholder="Product Price" />
        <input id="description" type="text" value={description} onChange={handleDescription} required placeholder="Product Description" />
        <input id="imageurl" type="text" value={url} onChange={handleUrl} required placeholder="Imageurl" />
        <input id="quantity" type="number" value={quantity} onChange={handleQuantity} placeholder="Product Quantity" />
        <button id="submitButton" onClick={handleClick}>Add Product</button>
    </div>
        </>
    )
}
export default ProductComponent;