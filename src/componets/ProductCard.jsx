import { useContext } from "react";
import {CartContext} from '../context/CartContext';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const { addToCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/product/${product.id}`);
      };
    return (
        <div className="product-card">
          <img
            src={product.image}
            alt={product.title}
            onClick={handleDetails}
            style={{ cursor: 'pointer' }}
          />
          <h4 onClick={handleDetails} style={{ cursor: 'pointer' }}>
            {product.title}
          </h4>
          <p>R{product.price}</p>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      );
};
export default ProductCard;