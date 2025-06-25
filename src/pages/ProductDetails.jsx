import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../services/productService'; 
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;
  return (
    <div className="product-info-section">
    <img className='main-image ' src={product.image} alt={product.title} />
    <div className="info">
      <h2 className="title">{product.title}</h2>
      <p>{product.description}</p>
      <div className="price-section">
      <p className="price">R{product.price}</p>
      </div>
      <button className="check-out" onClick={() => addToCart(product)}><span>Add to Cart</span></button>
    </div>
  </div>
  );
};

export default ProductDetails;
