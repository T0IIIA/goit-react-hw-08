import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "../../config/contactsAPI";



export const register = createAsyncThunk('register', async (credentials, thunkAPI) => {
  try {
    const { data } = await contactsAPI.post('users/signup', credentials)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const login = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const { data } = await contactsAPI.post('users/login', credentials)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.post('users/logout')
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk('refresh', async (_, thunkAPI) => {
  try {
    const { data } = await contactsAPI.get('users/current')
    return data
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})