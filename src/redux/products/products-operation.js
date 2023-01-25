import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProducts, fetchProductsById } from "../../API";

export const getProducts = createAsyncThunk("products", async () => {
  let { data } = await fetchProducts();
  //   let products = data.data;
  //   console.log(products);
  return data;
});

export const getProductsById = createAsyncThunk("products/id", async () => {
  let { data } = await fetchProductsById();

  return data;
});
