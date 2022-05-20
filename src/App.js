import React from 'react'
import NavBar from './components/navbar/NavBar'
import HomePage from './views/HomePage'
import ProductsPage from './views/ProductsPage'
import OrderPage from './views/OrderPage'
import AdminPage from './views/AdminPage'
import NotFoundPage from './views/NotFoundPage'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  return (
    <Router>
      <div className='bg-amber-100'>
        <div className='container py-10'>
          <NavBar />  
          <Routes>      
            <Route path="/" exact element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
