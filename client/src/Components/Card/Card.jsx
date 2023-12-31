// Card.js

import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">{product.price}</p>
      </div>
    </div>
  );
};

export default Card;
