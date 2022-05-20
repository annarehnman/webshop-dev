import React from 'react'
import ProductList from '../components/ProductList'

export default function HomePage() {

  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>Home</h1>
      <ProductList />
    </div>
  )
}
