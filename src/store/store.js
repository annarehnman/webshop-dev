import { configureStore } from "@reduxjs/toolkit"
import backgroundReducer from "./reducers/background"
import userReducer from "./reducers/user"
import productReducer from './reducers/product'

export default configureStore({
  reducer: {
    background: backgroundReducer,
    user: userReducer,
    product: productReducer
  }
})
