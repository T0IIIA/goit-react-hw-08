import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "../../config/contactsAPI";

export const fetchContacts = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await contactsAPI.get('/contacts')    
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('createContact', async (newContact, thunkAPI) => {
  
  try {
    const { data } = await contactsAPI.post('/contacts', newContact)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
  try {
    await contactsAPI.delete(`/contacts/${id}`)
    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})


export const updateContact = createAsyncThunk('updateContact', async (id, thunkAPI) => {
  try {
    await contactsAPI.patch(`/contacts/${id}`)
    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})