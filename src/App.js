import React, { useState } from 'react';
import HomePage from './views/HomePage';

function App() {

  const [products, setProducts] = useState(["product1", "product2"])

  return (
    <HomePage products={products} />
  );
}

export default App;
