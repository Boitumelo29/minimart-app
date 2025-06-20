import React from "react";
import ProductCard from './ProductCard';
import '../styles/ProductList.css';


const ProductList = ({ products })=>{
  
    if (!products.length) return <p>Loading Products...</p>;


    // return (
    //     <div style={{display: 'flex', flexWrap: 'wrap'}}>
    //         {products.map(product=>(
    //             <div key= {product.id} className="product-card">
    //             <img src={product.image} alt ={product.title} />
    //             <h4>{product.title}</h4>
    //             <p>R{product.price}</p>
    //         </div>))}
    //     </div>
    //   );


    return (
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      );
        

};
export default ProductList