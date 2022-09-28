// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getListProduct = createAsyncThunk("product/list" , async()=>{
    const product = await axios.get("https://marketdevb2bbe.fishlog.co.id/api/cat/product")
    return product.data.data.data
})

  
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products : [],
  },
  reducers: {
   
  },
  extraReducers: builder => {
    builder
    .addCase(getListProduct.fulfilled,(state,action)=>{
        state.products = action.payload
    })
  }
})

export const {   } = productSlice.actions

export default productSlice.reducer
