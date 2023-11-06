import React from "react";
import "./style.css";
import { ProductListItem } from "types/interface";
// import { useNavigate } from "react-router-dom";

interface Props {
  productListItem: ProductListItem;
}

//          component: Product List Item 컴포넌트           //
export default function ProductItem({ productListItem }: Props) {
  //          interface: Properties          //
  const { title, price, isLike, productImage } = productListItem;

  //          fucntion: 네비게이트 함수          //
  // const navigator = useNavigate();

  //          event handler: 게시물 아이템 클릭 이벤트 처리 함수          //
  const onClickHandler = () => {
    // navigator(productId);
  };

  //          render: Product List Item 컴포넌트 렌더링          //
  return (
    <div className="top-3-product-list-item" onClick={onClickHandler}>
      <div className="top-3-product-list-item-image-box">
        {/* <div
          className="top-3-product-list-item-image"
          style={{
            backgroundImage: `url(https://github.com/blueconecell/shoppingProject/blob/main/shoping-front/src/assets/images/%EB%A1%A4%ED%99%94%EC%9E%A5%EC%A7%80.jpg)`
          }}
        ></div> */}
        <img
          className="top-3-product-list-item-image"
          src={productImage}
          alt=""
        />
      </div>
      <div className="top-3-product-list-item-main-box">
        <div className="top-3-product-list-item-top">
          <div className="top-3-product-list-item-title">{title}</div>
        </div>
        <div className="top-3-product-list-item-bottom">
          <div className="top-3-product-list-item-price">
            <div className="top-3-product-list-item-price-value">{price}</div>
            <div className="top-3-product-list-item-price-unit"> 원</div>
          </div>
          {isLike ? (
            <div className="top-3-product-list-item-like">{"🤍"}</div>
          ) : (
            <div className="top-3-product-list-item-like">{"💛"}</div>
          )}
        </div>
      </div>
    </div>
  );
}
