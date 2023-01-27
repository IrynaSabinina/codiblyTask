import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProducts, fetchProductsById } from "../../API";

export const getProducts = createAsyncThunk("products", async (page = 1) => {
  try {
    let { data } = await fetchProducts(page);
    return data;
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 500) {
      alert("Ooops, sory try again later");
    }
  }
});

export const getProductsById = createAsyncThunk("products/id", async (id) => {
  try {
    let { data } = await fetchProductsById(id);
    return data.data;
  } catch (error) {
    if (error.response.status === 404) {
      alert("try again but select between 1 and 12");
    }
    if (error.response.status === 500) {
      alert("Sory try again later");
    }
  }
});
