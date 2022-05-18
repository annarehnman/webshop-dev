import React from 'react'
import Signup from '../components/Login'
import ProductList from '../components/ProductList'

export default function HomePage({ products }) {
  return (
    <div>
      <h1>HomePage</h1>
      <Signup />
      <br/>
      <ProductList products={products} />
    </div>
  )
}
