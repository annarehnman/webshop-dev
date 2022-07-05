import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reducers/menu'
import userReducer from './reducers/user'
import productReducer from './reducers/product'

export default configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
    product: productReducer
  }
})
