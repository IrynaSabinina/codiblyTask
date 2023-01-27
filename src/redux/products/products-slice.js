import { createSlice } from "@reduxjs/toolkit";

import { getProducts, getProductsById } from "./products-operation";
import { productsInitialState } from "./productsInitialState";
const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.productById = null;
    },
    [getProductsById.fulfilled]: (state, { payload }) => {
      state.productById = payload;
    },
    [getProductsById.rejected]: (state, { payload }) => {
      state.productById = null;
    },
  },
});
export const productsReducer = productsSlice.reducer;
export const { filter } = productsSlice.actions;
