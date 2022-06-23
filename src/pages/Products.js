import React from 'react'
import ProductList from '../components/products/ProductList'

export default function Products() {
  
  return (
    <div>
      <div className='w-2/3 pr-20 mb-6'>
        <div className='mb-6 space-y-2'>
          <h1>Kött och ägg</h1>
          <h1>direkt från gård</h1>
        </div>
        <div>
          <p>Här kan du beställa vårt fina grönbeteskött och färska ägg, så väl som produkter från ett antal andra lokala gårdar. Vi levererar inom Strängnäs- och Stockholmsområdet, det går också fint att hämta på plats.</p>
        </div>
      </div>
      <div className='bg-white rounded-lg p-14'>
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  )
}
