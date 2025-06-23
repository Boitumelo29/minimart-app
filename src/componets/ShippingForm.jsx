import React from 'react';

const ShippingForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Shipping Address</h2>
      <form className="shipping-form">
        <div className="row">
          <input type="text" name="name" placeholder="Name*" required value={formData.name} onChange={handleChange} />
          <input type="text" name="surname" placeholder="Surname*" required value={formData.surname} onChange={handleChange} />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone number*" required value={formData.phone} onChange={handleChange} />
        </div>
        <div className="row">
          <input type="text" name="city" placeholder="City*" required value={formData.city} onChange={handleChange} />
          <input type="text" name="province" placeholder="Province*" required value={formData.province} onChange={handleChange} />
          <input type="text" name="postalCode" placeholder="Postal Code*" required value={formData.postalCode} onChange={handleChange} />
        </div>

        <h2>Payment Method</h2>
        <div className="row">
          <input type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleChange} />
          <input type="text" name="cardHolder" placeholder="Card holder" value={formData.cardHolder} onChange={handleChange} />
        </div>
        <div className="row">
          <input type="text" name="mm" placeholder="MM" value={formData.mm} onChange={handleChange} />
          <input type="text" name="yy" placeholder="YY" value={formData.yy} onChange={handleChange} />
          <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
