import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isAdmin: false
  },
  reducers: {
    login: (state) => {
      state.isAdmin = !state.isAdmin
    }
  }
})

export const { login } = authSlice.actions

export default authSlice.reducer
