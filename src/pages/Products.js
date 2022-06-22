import React from 'react'
import ProductList from '../components/products/ProductList'

export default function Products() {
  
  return (
    <div className='p-10'>
      <div className='w-2/3 pr-20 mb-14'>
        <div className='font-bold text-5xl font-serif mb-10 space-y-2'>
          <h1>Kött och ägg</h1>
          <h1>direkt från gård</h1>
        </div>
        <div className='space-y-3'>
          <p>Här kan du beställa vårt fina grönbeteskött och färska ägg, så väl som produkter från ett antal andra lokala gårdar. Vi levererar inom Strängnäs- och Stockholmsområdet. Det går också fint att hämta på plats, se till att du hör av dig i förväg bara.</p>
        </div>
      </div>
      <div className='space-y-8'>
      <ProductList />
      <ProductList />
      <ProductList />
      </div>
    </div>
  )
}
