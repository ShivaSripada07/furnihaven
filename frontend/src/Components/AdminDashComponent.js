import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/AdminDashComponent.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
function AdminDashComponent() 
{
    const navigate=useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3421/products");
                setProduct(response.data);
                console.log(response.data);
                console.log(product);
            } catch (error) {
                console.error("Error fetching the products:", error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleProduct()
    {
        navigate('/addProduct');
    }
    function handleEdit()
    {

    }
    return (
        <>
            <div className="header">
                <search>
                    <form>
                        <input placeholder="Search" className="searchbox" /> <i className="bi bi-search"></i>
                    </form>
                </search>
                <img src={require('./logo.png')} className="logo" alt="logo" width="60px" height="50px" />
                <h1 className="title">FurniHaven</h1>
                <button className="view"><i class="bi bi-eye-fill"></i> View Orders</button>
            </div>
            <ul className="navbar">
                <li><a className="active" href="/admin"><i className="bi bi-house"></i> Home</a></li>
                <li><a href="/contact"><i className="bi bi-telephone"></i> Contact Us</a></li>
                <li className="right"><a href="/product"><i className="bi bi-box"></i> Products</a></li>
                <li className="right"><a href="/order"><i className="bi bi-card-list"></i> Orders</a></li>
                <li className="right"><a href="/logout"><i className="bi bi-box-arrow-left"></i> Logout</a></li>
            </ul>
            <div className="addupdate">
                <h1>Products</h1>
                <div>
                    <button className="productbtn" onClick={handleProduct}><i class="bi bi-bag-plus-fill"></i> Add Product</button>
                </div>
                <div>
                <button className="editbtn" onClick={handleEdit}><i class="bi bi-pencil-square"></i> Edit Product</button>
                </div>
            </div>
            <div className="products">
                {product.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.imageurl} className="card-img-top" alt="." width="150rem" height="300rem" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"><small>{item.description}</small></p>
                            <div className="btns">
                                <button id="submitButton" className="cartbtn" >Add To Cart</button>
                                <button id="submitButton" className="buybtn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default AdminDashComponent;
