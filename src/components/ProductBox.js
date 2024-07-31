import React from 'react';
import './ProductBox.css';
import { IoIosStar } from "react-icons/io";
const ProductBox = ({ product, addToCart }) => {
  return (
    <div className="product-boxes">
      <div className="product-box">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          <span className="material-icons"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span>
          <span>{product.rating}</span>
        </div>
        <div className="btns">
          <button onClick={() => addToCart(product)} className="add-to-cart">
            Add to Cart
          </button>
          <button onClick={() => addToCart(product)} className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
