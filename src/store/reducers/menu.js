import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'device',
  initialState: {
    showSmallMenu: false,
  },
  reducers: {
    toggleSmallMenu: (state) => {
      state.showSmallMenu = !state.showSmallMenu
    },
    closeSmallMenu: (state) => {
      state.showSmallMenu = false
    }
  }
})

export const { toggleSmallMenu, closeSmallMenu } = menuSlice.actions

export default menuSlice.reducer
