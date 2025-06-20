import { useContext } from "react";
import {CartContext} from '../context/CartContext';
import '../styles/ProductList.css';

const ProductCard = ({product}) => {
    const { addToCart} = useContext(CartContext);

    return(<div className="product-card">
        <img src={product.image} alt ={product.title} />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>);
};
export default ProductCard;