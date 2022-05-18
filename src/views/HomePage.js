import React from 'react'
import Signup from '../components/Login'
import ProductList from '../components/ProductList'

export default function HomePage({ products }) {
  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>HomePage</h1>
      <Signup />
      <br/>
      <ProductList products={products} />
    </div>
  )
}
