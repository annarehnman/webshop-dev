import React from 'react'
import ProductList from '../components/products/ProductList'

export default function Products() {
  
  return (
    <div className='bg-white md:rounded-lg p-8 md:p-14'>
      <div className='md:w-2/3 md:pr-20 mb-8 md:mb-12'>
        <div className='mb-8 space-y-2'>
          <h1>Kött och ägg</h1>
          <h1>direkt från gård</h1>
        </div>
        <div>
          <p>Här kan du beställa vårt fina grönbeteskött och färska ägg, så väl som produkter från ett antal andra lokala gårdar. Vi levererar inom Strängnäs- och Stockholmsområdet, det går också fint att hämta på plats.</p>
        </div>
      </div>
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  )
}
