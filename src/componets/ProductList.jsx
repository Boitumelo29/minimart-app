import React from "react";
import ProductCard from './ProductCard';
import '../styles/ProductList.css';


const ProductList = ({ products })=>{
  
    if (!products.length) return <p>Loading Products...</p>;

    return (
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      );
        

};
export default ProductList