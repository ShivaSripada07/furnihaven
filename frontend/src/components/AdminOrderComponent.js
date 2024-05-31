import { useState, useEffect } from "react";
import "./order.css";
import axios from "axios";
import "./secure.png";
import { useNavigate } from "react-router-dom";
function AdminOrderComponent() {
    const [orders,setOrders]=useState([])
    const navigate=useNavigate()
  useEffect(() => {
    const fetchData=async ()=>{
        try{
          const response=await axios.get("http://localhost:3001/admin/orders",{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setOrders(response.data);
        console.log(response.data)
        console.log(orders)
        }
        catch(error){
          navigate("/admindashboard")
        }
    };
    fetchData()
    },[]);
  return (
    <>
      <h1>ORDERS</h1>
      <hr />
      <div className="order-container">
        {console.log(orders)}
        {orders.map((item) => (
          <div className="item-ordered">
            <img src={item.imageurl} alt="productitem" className="item-image" />
            <div className="item-details">
              <h2 className="item-name">{item.productName}</h2>
              <p className="item-description">
                {item.description}
              </p>
              <p className="item-price">Price: &#8377;{item.totalPrice}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              <p className="item-status">status: {item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminOrderComponent;
