import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/auth"
import productReducer from './reducers/products'

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer
  }
})
