import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isUser: false,
    isAdmin: false
  },
  reducers: {
    toggleAdmin(state) {
      state.isAdmin = !state.isAdmin
    },
    toggleUser(state) {
      state.isUser = !state.isUser
    },
  },
})

export const { toggleAdmin, toggleUser } = userSlice.actions

export default userSlice.reducer
