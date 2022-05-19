import { configureStore } from "@reduxjs/toolkit"
import userReducer from './user'
import productReducer from './productList'

export default configureStore({
  reducer: {
    user: userReducer,
    productList: productReducer
  }
})
