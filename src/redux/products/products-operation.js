import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProducts, fetchProductsById } from "../../API";

export const getProducts = createAsyncThunk("products", async (page = 1) => {
  let { data } = await fetchProducts(page);
  //   let products = data.data;
  //   console.log(products);
  return data;
});

export const getProductsById = createAsyncThunk("products/id", async (id) => {
  let { data } = await fetchProductsById(id);

  return data.data;
});
