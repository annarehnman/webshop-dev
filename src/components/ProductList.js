import React from 'react'

export default function ProductList({ products }) {

  return (
    <div>
      <h2 className='font-bold text-2xl mb-1'>Produkter</h2>
      <div className='flex space-x-3'>
        {products.map(p => (
          <div className='border border-gray-500 w-1/2 p-3' key={p}>
            <h3 className='font-bold mb-1'>{p}</h3>
            <p>produktinfo</p>
          </div>
        ))}
      </div>
    </div>
  )
}
