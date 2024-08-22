import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, contactsAPI, setToken } from "../../config/contactsAPI";



export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await contactsAPI.post('users/signup', credentials)
    setToken(data.token)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await contactsAPI.post('users/login', credentials)
    setToken(data.token)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.post('users/logout')
    clearToken()
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token
  if (savedToken === null) {
    return thunkAPI.rejectWithValue('Token id not exist!')
  }
  try {
    setToken(savedToken)
    const { data } = await contactsAPI.get('users/current')
    return data
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})