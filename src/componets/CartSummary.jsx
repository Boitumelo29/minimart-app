import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ isFormComplete, setFormData, }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const subtotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 150;
  const total = subtotal + shipping;
  const navigate = useNavigate();


  const handlePayment = () => {
    if (!isFormComplete) {
      alert("Please complete the shipping form first.");
      return;
    }
    alert('Payment successful');
    clearCart();
    setFormData && setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      city: "",
      province: "",
      postalCode: "",
      cardNumber: "",
      cardHolder: "",
      mm: "",
      yy: "",
      cvv: "",
    });
    setPaymentSuccess(true);
  }

  const handleContinueShopping = () => {
    navigate('/')
  };

  return (
    <div className="cart-summary">
      <h3>Your Cart</h3>
      <ul className="cart-items">
        {cartItems.map((item, idx) => (
          <li key={idx}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>Qty: {item.quantity}</p>
              <p>R{(item.price * item.quantity)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary-totals">
        <p>Subtotal: R{subtotal.toFixed(2)}</p>
        <p>Shipping: R{shipping}</p>
        <h4>Total: R{total.toFixed(2)}</h4>
      </div>

      {paymentSuccess ? (
        <button onClick={handleContinueShopping} className="check-out"><span>Continue Shopping</span></button>
      ) : (
        <button onClick={handlePayment} className="check-out"><span>Continue to Payment</span></button>
      )}
    </div>
  );
};

export default CartSummary;