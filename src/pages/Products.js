import React from 'react'
import ProductList from '../components/products/ProductList'

export default function Products() {
  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>Products</h1>
      <ProductList />
    </div>
  )
}
