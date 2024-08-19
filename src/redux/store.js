import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contacts/slice'
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";



export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filtersReducer,
    auth: authReducer,
  },
})
