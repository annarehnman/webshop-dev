import { createSlice } from '@reduxjs/toolkit'

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    onHome: null,
  },
  reducers: {
    setBackground: (state, bool) => {
      state.onHome = bool.payload
    }
  }
})

export const { setBackground } = backgroundSlice.actions

export default backgroundSlice.reducer
