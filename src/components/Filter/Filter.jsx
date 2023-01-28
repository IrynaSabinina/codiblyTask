import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProductsById } from "../../redux/products/products-operation";

import styles from "./Filter.module.css";

import { filter } from "../../redux/products/products-slice";
export const Filter = () => {
  const filterVal = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filterVal === "") {
      return;
    } else {
      dispatch(getProductsById(Number(filterVal)));
    }
  }, [dispatch, filterVal]);

  const handleFilter = (e) => {
    console.log(e.target.value);
    dispatch(filter(e.target.value));
  };

  return (
    <>
      <label className={styles.filterContainer}>
        <input
          className={styles.input}
          type="number"
          name="filter"
          value={filterVal}
          placeholder="just numbers"
          onChange={handleFilter}
        ></input>
      </label>
    </>
  );
};
