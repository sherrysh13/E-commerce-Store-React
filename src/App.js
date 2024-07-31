import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import ProductBox from './components/ProductBox';
import './App.css';
import shoes1 from './components/images/shoes1.jpg'
import shoes2 from './components/images/shoes2.jpeg'
import watch1 from './components/images/watch1.webp'
import watch2 from './components/images/watch2.jpeg'
import tracksuit1 from './components/images/tracksuit1.jpeg'
import tracksuit2 from './components/images/tracksuit2.webp'
import bridlesuit1 from './components/images/bridlesuit2.jpeg'
import bridlesuit3 from './components/images/bridlesuit3.jpg'
import mobile1 from './components/images/mobile1.jpg'
import mobile2 from './components/images/mobile2.jpeg'
import airpod from './components/images/airpod.jpeg'
import airpod2 from './components/images/airpod2.jpg'

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      title: 'Pure Leather Shoes',
      price: 29.99,
      rating: "",
      image: shoes1
    },
    {
      id: 2,
      title: 'Walima Dress',
      price: 39.99,
      rating: "",
      image: bridlesuit1
    },
    {
      id: 3,
      title: 'Mini Airpods',
      price: 49.99,
      rating: "",
      image: airpod
    },
    {
      id: 4,
      title: 'Redmi 13C',
      price: 59.99,
      rating: "",
      image: mobile1
    },
    {
      id: 5,
      title: 'Best Sneakers',
      price: 29.99,
      rating: "",
      image: shoes2
    },
    {
      id: 6,
      title: 'Baraat Suit',
      price: 39.99,
      rating: "",
      image: bridlesuit3
    },
    {
      id: 7,
      title: 'Audionic Airpods',
      price: 49.99,
      rating: "",
      image: airpod2
    },
    {
      id: 8,
      title: 'Galaxy A50',
      price: 59.99,
      rating: "",
      image: mobile2
    },
    {
      id: 10,
      title: 'Royal Blue Watch ',
      price: 39.99,
      rating: "",
      image: watch1
    },
    {
      id: 11,
      title: 'Gold Watch',
      price: 49.99,
      rating: "",
      image: watch2
    },
    {
      id: 12,
      title: 'Track Suit for Men',
      price: 59.99,
      rating: "",
      image: tracksuit1
    },
    {
      id: 13,
      title: 'Track Suit for Boys',
      price: 49.99,
      rating: "",
      image: tracksuit2
    }
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar cartItems={cartItems} setSearchQuery={setSearchQuery} />
      {
        searchQuery === "" ? (
          <div className="imageSliderContainer">
            <div className="imageSlider">
                <ImageSlider />
            </div>
          </div>
        ) : null
      }
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductBox key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
