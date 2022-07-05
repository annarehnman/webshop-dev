import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
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
    <div className='relative font-kbnearblack'>
      <div className='w-full min-h-screen bg-bgImage bg-cover'>
        <div className='text-white w-full py-5 md:py-10'>
          <Header />
        </div>
        <div className='container md:py-10'>
          <Routes >      
            <Route path="/" exact element={<Home />} />
            <Route path="/butiken" exact element={<Products />} />
            <Route path="/butiken/:id" element={<ProductDetails />} />
            <Route path="/hittaoss" element={<Contact />} />
            <Route path="/bestallning" element={<Order />} />
            <Route path="/admin" element={<Admin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>  
      </div>
    </div>
  )
}
