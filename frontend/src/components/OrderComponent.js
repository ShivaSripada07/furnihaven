import { useState, useEffect } from "react";
import "./order.css";
import axios from "axios";
import "./secure.png";
function OrderComponent() {
  
    const [orders,setOrders]=useState([])
  useEffect(() => {
    const fetchData=async ()=>{
        const response=await axios.get("http://localhost:3001/orders")
        setOrders(response.data);
        console.log(response.data)
        console.log(orders)
    };
    fetchData()
    },[]);

  return (
    <>
      <h1>THANKS FOR ORDERING</h1>
      <hr />
      <div className="order-container">
        {console.log(orders)}
        {orders.map((item) => (
           
          <div className="item-ordered">
            <img src={item.imageurl} alt="picture" className="item-image" />
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

export default OrderComponent;
