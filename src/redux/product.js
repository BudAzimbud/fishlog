// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListProduct = createAsyncThunk(
  "product/list",
  async ({ page }) => {
    const product = await axios.get(
      "https://marketdevb2bbe.fishlog.co.id/api/cat/product?page=" + page
    );

    return {
      list: product.data.data.data,
      currentPage: product.data.data.current_page,
      lastPage: product.data.data.last_page,
    };
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    currentPage: 0,
    lastPage:0,
    page:1
  },
  reducers: {
    setPage : (state,action)=>{
        state.page = state.page + action.payload.page
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.products = action.payload.list;
      state.currentPage = action.payload.currentPage;
      state.lastPage = action.payload.lastPage
    });
  },
});

export const {setPage} = productSlice.actions;

export default productSlice.reducer;
