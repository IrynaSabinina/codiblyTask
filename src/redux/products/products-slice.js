import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductsById } from "./products-operation";
import { productsInitialState } from "./productsInitialState";
const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,

  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [getProductsById.fulfilled]: (state, { payload }) => {
      state.productById = payload;
    },
  },
});
export const productsReducer = productsSlice.reducer;
