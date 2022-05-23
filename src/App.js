
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Order from './pages/Order'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import { useDispatch } from 'react-redux'
import { setLoading, setUser } from './store/reducers/user'
import { auth } from './services/firebase'

export default function App() {
  const dispatch = useDispatch()

  const checkUser = () => {
    dispatch(setLoading(true))
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(setUser(user.email))
      }
    })
    dispatch(setLoading(false))
  }

  checkUser()

  return (
    <div className='bg-amber-100'>
      <div className='container py-10'>
        <NavBar />  
        <Routes>      
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
