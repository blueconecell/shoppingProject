import React from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import { top3ProductListMock } from "mocks";

function App() {
  return (
    <>
      <div>          
      <header>
            <div className="header-logo">Logo</div>
            <div className="header-profile">            
              <div className="header-login">로그인</div>
              <div className="header-signin">회원가입</div>
            </div>
      </header>
      <div className="main">
      <div className="top-3-product">

        <h1 className="top-3-product-title">금주의 Top 3 상품</h1>
        <div className="top-3-product-item">
        {top3ProductListMock.map((productList) => (
          <ProductItem productListItem={productList} />
        ))}
        </div>
      </div>
      </div>

      </div>
    </>
  );
}

export default App;
