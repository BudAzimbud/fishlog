// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


  
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product : [],
  },
  reducers: {
   
  },
  extraReducers: builder => {
  }
})

export const {   } = productSlice.actions

export default productSlice.reducer
