import React from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import { top3ProductListMock } from "mocks";

function App() {
  return (
    <>
      {top3ProductListMock.map((productList) => (
        <ProductItem productListItem={productList} />
      ))}
    </>
  );
}

export default App;
