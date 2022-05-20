import React from 'react'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Order from './views/Order'
import Admin from './views/Admin'
import NotFound from './views/NotFound'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  return (
    <Router>
      <div className='bg-amber-100'>
        <div className='container py-10'>
          <NavBar />  
          <Routes>      
            <Route path="/" exact element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
