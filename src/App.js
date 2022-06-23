import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NavBar from './components/navigation/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import { useDispatch } from 'react-redux'
// import { setBackground } from './store/reducers/background'
import { setLoading, setUser } from './store/reducers/user'
import { auth } from './services/firebase'
import image from './assets/images/gard.jpg'

export default function App() {
  const dispatch = useDispatch()

  // const onHome = useSelector((state) => state.background.onHome)

  const checkUser = () => {
    dispatch(setLoading(true))
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(setUser(user.email))
      }
    })
    dispatch(setLoading(false))
  }

  // const checkBackground = () => {
  //   if(window.location.pathname === "/") {
  //     dispatch(setBackground(true))
  //   } else {
  //     dispatch(setBackground(false))
  //   }
  // }

  checkUser()
  // checkBackground()

  return (
    <div className= 'bg-bgImage bg-cover w-full h-full font-kbnearblack min-h-screen'>
      <div className='text-white w-full py-10'>
        <div className='container'>
          {/* <Header /> */}
          <NavBar />
        </div>
      </div>
      <div className='container min-h-full py-10'>
        <Routes >      
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>  
    </div>
  )
}
