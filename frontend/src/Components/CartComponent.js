import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Shield, X } from 'lucide-react';
import QRCode from 'react-qr-code';
import axios from 'axios';
import "../styles/CartComponent.css";

function CartComponent() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem("name");
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/cart/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        params: {
          userId: userId
        }
      });
      setCart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const handleCheckout = () => {
    setShowQRCode(true);
  };

  const handlePaymentComplete = async () => {
    setIsProcessing(true);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("name");
    try {
      await axios.post(
        'http://localhost:3001/order/saveOrder',
        {}, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          params: {
            "username": username
          }
        }
      );
      navigate('/orders');
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (cartItemId) => {
    try {
      const userId = localStorage.getItem("name");
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3001/cart/${cartItemId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        params: {
          userId: userId
        }
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const upiLink = `upi://pay?pa=9121501561-2@ybl&pn=FurniHaven&am=${calculateTotal()}&cu=INR`;

  return (
    <>
      <div className="cartheadertag">
        <img src={require('./logo.png')} alt="logo" width="60" height="50" />
        <h1 className="title">FurniHaven</h1>
      </div>
      <div className="cart-container">
        <div className="head">
          <a href="/dashboard" className="carthref">
            <ArrowLeft size={24} />
          </a>
          <h2 className="tag">My Cart</h2>
        </div>
        
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.cartItemId} className="cart-item">
              <img src={item.imageurl} alt={item.productName} />
              <div className="cart-item-details">
                <h3>{item.productName}</h3>
                <p>₹{item.price}</p>
                <p style={{ color: '#16a34a' }}>Free Shipping</p>
              </div>
              <button 
                className="cartdeletebtn"
                onClick={() => handleDelete(item.cartItemId)}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Amount</h3>
          <div className="cart-summary-item">
            <span>Item total</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>
          <div className="cart-summary-item">
            <span>Shipping fee</span>
            <span style={{ color: '#16a34a' }}>Free</span>
          </div>
          <div className="cart-summary-item">
            <span>Total</span>
            <span>₹{calculateTotal().toFixed(2)}</span>
          </div>

          {!showQRCode ? (
            <button
              className="checkout-button"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          ) : (
            <div className="qr-section">
              <button 
                className="qr-close-button"
                onClick={() => setShowQRCode(false)}
              >
                <X size={20} />
              </button>
              <div className="qr-container">
                <h4 className="qr-title">Scan QR Code to Pay</h4>
                <div className="qr-code-wrapper">
                  <QRCode
                    value={upiLink}
                    size={180}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox="0 0 256 256"
                    level="H"
                  />
                </div>
                <div className="security-note">
                  <Shield size={16} />
                  <p>Secure Payment Gateway</p>
                </div>
              </div>
              <button
                className="complete-payment-button"
                onClick={handlePaymentComplete}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing Payment...' : 'Complete Payment'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartComponent;