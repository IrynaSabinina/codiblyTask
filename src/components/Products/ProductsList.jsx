import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProducts } from "../../redux/products/products-operation";
import {
  productsByIdSelector,
  productsSelector,
} from "../../redux/products/products-selectors";
import { ProductItem } from "./ProductItem";
import styles from "./ProductList.module.css";
import { Pagination } from "../Pagination/Pagination";

export const ProductsList = () => {
  const products = useSelector(productsSelector);
  const filteredProduct = useSelector(productsByIdSelector);
  const filterVal = useSelector((state) => state.filter);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filterVal === "") {
      dispatch(getProducts(page));
    }
  }, [dispatch, page, filterVal]);

  const paginationNext = () => {
    if (products.page < products.total_pages && products.page > 0) {
      setPage(page + 1);
    } else {
      alert("it's the end of the list");
    }
  };
  const paginationPrev = () => {
    if (products.page <= 3 && page >= 2) {
      setPage(page - 1);
    } else {
      alert("it's begin of the list");
    }
  };

  return (
    <>
      <table className={styles.listContainer}>
        <tbody className={styles.table}>
          <tr>
            <td cl>id</td>
            <td>name</td>
            <td>year</td>
          </tr>
        </tbody>
        <tbody className={styles.table}>
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
        </tbody>
      </table>
      {filteredProduct ? (
        <></>
      ) : (
        <Pagination
          currentPage={page}
          next={paginationNext}
          prev={paginationPrev}
        />
      )}
    </>
  );
};
