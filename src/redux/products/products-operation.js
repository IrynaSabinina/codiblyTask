import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchProducts, fetchProductsById } from "../../API";

export const getProducts = createAsyncThunk("products", async (page = 1) => {
  try {
    let { data } = await fetchProducts(page);
    return data;
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 500) {
      toast.error("Ooops, sory try again later", {
        theme: "colored",
      });
    }
  }
});

export const getProductsById = createAsyncThunk("products/id", async (id) => {
  try {
    let { data } = await fetchProductsById(id);
    return data.data;
  } catch (error) {
    if (error.response.status === 404) {
      toast.warning("Oooopss, sory try again but select between 1 and 12", {
        theme: "colored",
      });
    }
    if (error.response.status === 500) {
      toast.error("Sory try again later, something wrong with server", {
        theme: "colored",
      });
    }
  }
});
