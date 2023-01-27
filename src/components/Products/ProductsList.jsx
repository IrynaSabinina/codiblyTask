import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getProducts,
  getProductsById,
} from "../../redux/products/products-operation";
import {
  productsByIdSelector,
  productsSelector,
} from "../../redux/products/products-selectors";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const products = useSelector(productsSelector);
  const filteredProduct = useSelector(productsByIdSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);
  console.log(products);
  console.log(filteredProduct);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>year</td>
          </tr>
        </tbody>
        {filteredProduct ? (
          <ProductItem
            key={filteredProduct.id}
            id={filteredProduct.id}
            name={filteredProduct.name}
            year={filteredProduct.year}
            color={filteredProduct.color}
            pantone_value={filteredProduct.pantone_value}
          />
        ) : (
          products.data?.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.name}
                year={item.year}
                color={item.color}
                pantone_value={item.pantone_value}
              />
            );
          })
        )}
      </table>
    </>
  );
};
