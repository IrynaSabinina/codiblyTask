import "./App.css";
import { Filter } from "./components/Filter/Filter.jsx";
import { ProductsList } from "./components/Products/ProductsList";

function App() {
  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
}

export default App;
