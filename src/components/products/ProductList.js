import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const products = useSelector((state) => state.product.allProducts)

  return (
    <div className= 'w-full mb-12 last:mb-0'>
      <h2 className='font-bold font-serif text-2xl mb-3'>Kategori</h2>
      <ul>
        {products.map(p => (
          <li className='pb-1 mb-5 last:mb-0' key={p.id}>
            <div className='flex justify-between whitespace-nowrap'>
              <Link to={`/products/${p.id}`} product={p.id} >
                <div>
                  <h3 className='font-bold'>{p.name}</h3>
                  <p className='mr-1'>Kort produktinfo</p>
                </div>
              </Link>
              <div className='w-full mx-1 mb-1.5 border-kblightgray border-b border-dashed'></div>
              <div className='text-sm leading-none space-x-2 mb-1.5'>
                <Link to={`/products/${p.id}`} product={p.id} >
                  <button className='h-full bg-kblightgray hover:bg-kbdarkgray text-white w-20 text-center ml-1'>INFO</button>
                </Link>
                <button className='h-full bg-kblightgray hover:bg-kbdarkgray text-white w-20 text-center'>BESTÄLL</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
