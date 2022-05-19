import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: ["Produkt 1", "Produkt 2", "Produkt 3", "Produkt 4", "Produkt 5"]
  },
  reducers: {},
})

// export const { } = productSlice.actions

export default productListSlice.reducer
