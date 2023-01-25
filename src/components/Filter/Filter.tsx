import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProductsById } from "../../redux/products/products-operation";
export const Filter = () => {
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getProductsById);
  });
  return (
    <>
      <label>
        <input type="number"></input>
      </label>
    </>
  );
};
