import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";



export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filtersReducer,
  },
})
