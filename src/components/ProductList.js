import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductList() {

  const products = useSelector((state) => state.productList.products)

  return (
    <div>
      <h2 className='font-bold text-2xl mb-1'>Produkter</h2>
      <div className='flex flex-wrap justify-center'>
        {products.map(p => (
          <div className='border border-gray-500 p-3' key={p}>
            <h3 className='font-bold mb-1'>{p}</h3>
            <p>produktinfo</p>
          </div>
        ))}
      </div>
    </div>
  )
}
