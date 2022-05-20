import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {

  const products = useSelector((state) => state.productList.products)

  return (
    <div className= 'w-full'>
      <h2 className='font-bold text-xl mb-2'>Produkter</h2>
      <ul className='flex flex-wrap -mr-3'>
        {products.map(p => (
          <li className='w-1/3 pr-3 pb-3' key={p}>
            <div className='border border-gray-500 p-3'>
              <h3 className='font-bold mb-1'>{p}</h3>
              <p>produktinfo</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
