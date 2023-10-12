import React from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import { top3ProductListMock } from "mocks";

function App() {
  return (
    <>
      <div className="main">
        <div className="top-3-product-item">
          {top3ProductListMock.map((productList) => (
            <ProductItem productListItem={productList} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
