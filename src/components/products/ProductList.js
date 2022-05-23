import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const products = useSelector((state) => state.product.allProducts)

  return (
    <div className= 'w-full'>
      <h2 className='font-bold text-xl mb-2'>Produkter</h2>
      <ul className='flex flex-wrap -mr-3'>
        {products.map(p => (
          <li className='w-1/3 pr-3 pb-3' key={p.id}>
            <Link to={`/products/${p.id}`} product={p.id} >
              <div className='border border-gray-500 p-3'>
                <h3 className='font-bold mb-1'>{p.name}</h3>
                <p>produktinfo</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
