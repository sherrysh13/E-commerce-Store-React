import React, { useState } from 'react';
import './Navbar.css';
import { FaCartPlus } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";


const Navbar = ({ cartItems, setSearchQuery }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="navbar-container">
        <nav className="navbar">
        <div className="navbar-brand">E-Commerce Store</div>
          <div className="input-feild">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="navbar-search"
          />
          {/* <CiSearch className='search-icon'/> */}
        </div>
        <div className="navbar-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
          <span className="cart-icon"><FaCartPlus /> </span>
          {cartItems.length > 0 && (
            <span className="navbar-cart-count">{cartItems.length}</span>
          )}
        </div>
        {isCartOpen && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div>
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
