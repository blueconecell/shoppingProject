import React from "react";
import "./App.css";


import HeaderGuest from "components/HeaderGuest";
import ProductItem from "./components/ProductItem";
import CategotyList from "components/CategoryList";
import PopularKeyword from "components/PopularKeyword";
import CategoryProductItem from "components/CategoryProductItem";

import { top3ProductListMock, categoryProductListMock, popularKeywordListMock } from "mocks";

function App() {
  return (
    <>
      <div>
        <HeaderGuest />
        <div className="main">
          <div className="category-list">
            <CategotyList/>
          </div>
          <div className="main-content">
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
          <div className="popular-keyword">
            {popularKeywordListMock.map((popularKeywordList) => (
              <PopularKeyword popularKeywordList={popularKeywordList}/>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
