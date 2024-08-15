import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  filters: {
    name: '',
  },
}

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filters.name = action.payload
    }
  }
})

export const filtersReducer = filtersSlice.reducer
export const { filter } = filtersSlice.actions