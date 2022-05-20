import React from 'react'
import HomePage from './views/HomePage'
import AdminPage from './views/AdminPage'
import NavBar from './components/NavBar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  return (
    <Router>
      <div className='bg-amber-100'>
        <div className='container py-10'>
          <NavBar />  
          <Routes>      
            <Route path="/" exact element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
