import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const products = useSelector((state) => state.product.allProducts)

  return (
    <div className= 'w-full mb-12 last:mb-0'>
      <h2 className='text-3xl md:text-4xl mb-3'>Kategori</h2>
      <ul>
        {products.map(p => (
          <li className='pb-1 mb-5 last:mb-0' key={p.id}>
            <div className='md:flex justify-between whitespace-nowrap'>
              <Link to={`/butiken/${p.id}`} product={p.id} >
                <div>
                  <h3 className='font-bold'>{p.name}</h3>
                  <p className='mb-3 md:mb-0 mr-1'>Kort produktinfo</p>
                </div>
              </Link>
              <div className='md:w-full md:mx-1 md:mb-1.5 md:border-kblightgray md:border-b md:border-dashed'></div>
                <div className='flex md:block w-full md:w-auto justify-between space-x-5 md:space-x-2 text-sm leading-none'>
                  <button className='w-1/2 md:w-20 bg-kblightgray hover:bg-kbdarkgray text-white text-center py-4 md:ml-1 transition duration-300'>
                    <Link to={`/butiken/${p.id}`} product={p.id}>INFO</Link>
                  </button>
                  <button  className='w-1/2 md:w-20 bg-kblightgray hover:bg-kbdarkgray text-white text-center py-4 transition duration-300'>
                    <Link to={`/butiken/${p.id}`} product={p.id}>BESTÄLL</Link>
                  </button>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
