import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b6219db5ae2d11eb6601d5.mockapi.io/'

export const fetchContacts = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts')    
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('createContact', async (newContact, thunkAPI) => {
  
  try {
    const { data } = await axios.post('/contacts', newContact)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`)
    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})