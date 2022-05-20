import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProducts: [
      {"id": 1, "name": "Produkt 1"},
      {"id": 2, "name": "Produkt 2"},
      {"id": 3, "name": "Produkt 3"},
      {"id": 4, "name": "Produkt 4"},
      {"id": 5, "name": "Produkt 5"},
      ],
    currentProduct: null
  },
  reducers: {},
})

// export const { } = productSlice.actions

export default productSlice.reducer
