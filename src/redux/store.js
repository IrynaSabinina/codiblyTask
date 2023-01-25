import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/products-slice";

export const store = configureStore({
  reducer: productsReducer,
  devTools: process.env.NODE_ENV === "development",
});
