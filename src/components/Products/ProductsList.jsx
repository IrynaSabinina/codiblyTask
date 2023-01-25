import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProducts } from "../../redux/products/products-operation";
import { productsSelector } from "../../redux/products/products-selectors";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const products = useSelector(productsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
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
        {products.data?.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              year={item.year}
              color={item.color}
            />
          );
        })}
      </table>
    </>
  );
};
