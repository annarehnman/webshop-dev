import React from 'react'
import Login from '../components/Login'
import ProductList from '../components/ProductList'

export default function HomePage() {
  return (
    <div className='bg-white bg-orange-300 p-10'>
      <h1 className='font-bold text-3xl mb-5'>HomePage</h1>
      <Login />
      <br/>
      <ProductList />
    </div>
  )
}
