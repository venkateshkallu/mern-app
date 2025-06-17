import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="card">
    <img src={product.image} alt={product.title} width="200" />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
