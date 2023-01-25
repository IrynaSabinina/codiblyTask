import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProductsById } from "../../redux/products/products-operation";
import { productsSelector } from "../../redux/products/products-selectors";
import { filter } from "../../redux/products/products-slice";
export const Filter = () => {
  const filterVal = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const productById = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getProductsById(Number(filterVal)));
  }, [filterVal]);

  console.log(productById);
  const handleFilter = (e) => {
    dispatch(filter(e.target.value));
  };

  console.log(productById);
  return (
    <>
      <label>
        <input
          type="number"
          name="filter"
          value={filterVal}
          onChange={handleFilter}
        ></input>
      </label>
    </>
  );
};
