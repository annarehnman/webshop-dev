import React, { useState } from 'react'
import HomePage from './views/HomePage'
import { AdminProvider } from './AdminContext'

export default function App() {

  const [products, setProducts] = useState(["Produkt 1", "Produkt 2"])

  return (
    <AdminProvider>
      <div className='bg-amber-100'>
        <div className='container py-10 space-y-5'>          
          <HomePage products={products} />
        </div>
      </div>
    </AdminProvider>
  )
}
