import React, { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="App">
      <h1>🛍️ Mini E-Commerce</h1>
      <Home addToCart={addToCart} />
      <h3>🧺 Cart: {cart.length} item(s)</h3>
    </div>
  );
}

export default App;