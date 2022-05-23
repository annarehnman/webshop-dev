import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user"
import productReducer from './reducers/product'

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  }
})
