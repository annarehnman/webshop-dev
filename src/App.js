import React, { useState } from 'react';
import HomePage from './views/HomePage';

function App() {

  const [products, setProducts] = useState(["Produkt 1", "Produkt 2"])

  return (
    <div className='bg-amber-100'>
      <div className='container py-10'>
        <HomePage products={products} />
      </div>
    </div>
  );
}

export default App;
