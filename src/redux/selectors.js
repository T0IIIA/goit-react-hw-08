import { createSelector } from "@reduxjs/toolkit"


export const selectContacts = state => state.contact.contacts.items
export const selectFilter = state => state.filter.filters.name

export const selectLoading = state => state.contact.contacts.loading
export const selectError = state => state.contact.contacts.error




export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
)}
)
