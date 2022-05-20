import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../firebase'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isAdmin: false
  },
  reducers: {
    signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password)
    },
    // login(email, password) {
    // },
    toggleAdmin(state) {
      state.isAdmin = !state.isAdmin
    },
  },
})

export const { toggleAdmin, toggleUser } = userSlice.actions

export default userSlice.reducer
