import { Filter } from "../components/Filter/Filter";
import { ProductsList } from "../components/Products/ProductsList";

export const Home = () => {
  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
};
