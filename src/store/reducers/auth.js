import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isAdmin: false,
    isLoading: false
  },
  reducers: {
    setLoading: (state, bool) => {
      state.isLoading = bool.payload
    },
    setUser: (state, storedUser) => {
      state.currentUser = storedUser
      state.isAdmin = true
    },
    login: (state, loggedInUser) => {
      state.currentUser = loggedInUser.payload
      state.isAdmin = true
    },
    logout: (state) => {
      state.currentUser = null
      state.isAdmin = false
    }
  }
})

export const { setLoading, setUser, login, logout } = authSlice.actions

export default authSlice.reducer
