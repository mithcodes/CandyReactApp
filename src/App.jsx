// App.jsx

import React from 'react';
import Cart from './components/Cart';
import ProductAdd from './components/ProductAdd';
import ShowProduct from './components/ShowProduct';
import ProductContextProvider from './context/ProductContext';
import "./App.css"
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <ProductAdd />
        <Cart />
        <ul>
          <ShowProduct />
        </ul>
      </ProductContextProvider>
    </div>
  );
}

export default App;
