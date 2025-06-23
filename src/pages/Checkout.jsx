import React, { useState } from "react";
import ShippingForm from '../componets/ShippingForm';
import CartSummary from '../componets/CartSummary';
import '../styles/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
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

  const isFormComplete = Object.values(formData).every((val) => val.trim() !== "");

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <ShippingForm formData={formData} setFormData={setFormData} />
      </div>
      <div className="checkout-summary">
        <CartSummary isFormComplete={isFormComplete} setFormData={setFormData} formData={formData} />
      </div>
    </div>
  );
};

export default Checkout;