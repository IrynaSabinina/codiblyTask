import axios from "axios";

const BASE_URL = "https://reqres.in/api";
const API = axios.create(
  { baseURL: BASE_URL },
  {
    mode: "no-cors",
    credentials: "include",
    method: "GET",
  }
);

export const fetchProducts = () => {
  const data = API.get("/products");

  return data;
};
// fetchProducts();
export const fetchProductsById = (id) => {
  const data = API.get(`products/${id}`);

  return data;
};
