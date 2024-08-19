import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "../contacts/operations"

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
}


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload)
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload)
      })

      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), state => {
        state.contacts.loading = true,
        state.contacts.error = false
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), state => {
        state.contacts.error = true,
        state.contacts.loading = false
      })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), state => {
        state.contacts.loading = false
      })
  }
})

export const contactsReducer = contactsSlice.reducer




