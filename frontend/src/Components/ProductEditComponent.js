import '../styles/ProductEditComponent.css'
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ProductEditComponent()
{
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [url,setUrl]=useState('');
    const [quantity,setQuantity]=useState('');
    const navigate=useNavigate();
    const params=useParams();
    console.log(params.id);
    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const response = await axios.get(`http://localhost:3001/editProduct/${params.id}`);
                const item = response.data;
                setId(item.productId);
                setName(item.productName);
                setUrl(item.imageurl);
                setPrice(item.price);
                setDescription(item.description);
                setQuantity(item.quantity);
            } 
            catch (error) 
            {
                console.error(error);
            }
        };
        fetchData();
    }, [params.id]); 
    function handleId(e)
    {
        setId(e.target.value);
    }
    function handleName(e)
    {
        setName(e.target.value);
    }
    function handlePrice(e)
    {
        setPrice(e.target.value);
    }
    function handleDescription(e)
    {
        setDescription(e.target.value);
    }
    function handleUrl(e)
    {
        setUrl(e.target.value);
    }
    function handleQuantity(e)
    {
        setQuantity(e.target.value);
    }
    async function handleClick()
    {
        try{
            await axios.patch(`http://localhost:3001/admin/productEdit/${params.id}`,{"productId":id,"imageurl":url,"productName":name,"price":price,"description":description,"quantity":quantity});
        }
        catch(err)
        {
            console.log(err);
        }
        window.alert("Product Modified Successfully");
        navigate('/admindashboard');
    }
    return(
        <>
            <div id="signupBox">
            <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
            <input id="productname" type="text" value={id} onChange={handleId} required placeholder="Product Id" />
            <input id="imageurl" type="text" value={url} onChange={handleUrl} required placeholder="Imageurl" />
            <input id="productname" type="text" value={name} onChange={handleName} required placeholder="Product Name" />
            <input id="productprice" type="text" value={price} onChange={handlePrice} placeholder="Product Price" />
            <input id="description" type="text" value={description} onChange={handleDescription} required placeholder="Product Description" />
            <input id="quantity" type="number" value={quantity} onChange={handleQuantity} placeholder="Product Quantity" />
            <button id="submitButton" onClick={handleClick}>Edit Product</button>
    </div>
        </>
    )
}
export default ProductEditComponent;