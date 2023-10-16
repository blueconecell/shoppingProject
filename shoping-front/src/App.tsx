import React from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import CategoryProductItem from "components/CategoryProductItem";
import HeaderGuest from "components/HeaderGuest";
import { top3ProductListMock, categoryProductListMock } from "mocks";

function App() {
  return (
    <>
      <div>
        <HeaderGuest  />
        <div className="main">
          <div className="top-3-product">
            <h1 className="top-3-product-title">금주의 Top 3 상품</h1>
            <div className="top-3-product-item">
              {top3ProductListMock.map((productList) => (
                <ProductItem productListItem={productList} />
              ))}
            </div>
          </div>
          <div className="category-product">
            <h1 className="category-product-title">카테고리별 상품</h1>
            <div className="category-product-item">
              {categoryProductListMock.map((categoryProductList) => (
                <CategoryProductItem
                  categoryProductListItem={categoryProductList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
