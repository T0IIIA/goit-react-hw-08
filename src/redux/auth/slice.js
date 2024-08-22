import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshUserThunk, registerThunk } from './operations'

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.isRefreshing = false
        state.user.name = action.payload.name
        state.user.email = action.payload.email
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState
      })
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isRefreshing = true
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isRefreshing = false
      })
  },
})

export const authReducer = slice.reducer
