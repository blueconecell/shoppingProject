import React from "react";
import "./style.css";
import { ProductListItem } from "types/interface";
// import { useNavigate } from "react-router-dom";

interface Props {
  productListItem: ProductListItem;
}

//          component: Product List Item 컴포넌트           //
export default function ProductItem({ productListItem }: Props) {
  //          properties           //
  const { title, price, productImage, isLike } = productListItem;

  //          fucntion: 네비게이트 함수          //
  // const navigator = useNavigate();

  //          event handler: 게시물 아이템 클릭 이벤트 처리 함수          //
  const onClickHandler = () => {
    // navigator(productId);
  };

  //          render: Product List Item 컴포넌트 렌더링          //
  return (
    <div className="product-list-item" onClick={onClickHandler}>
      <div className="product-list-item-image-box">
        <div
          className="product-list-item-image"
          style={{
            backgroundImage: `url(${productImage ? productImage : null})})`,
          }}
        ></div>
      </div>
      <div className="product-list-item-main-box">
        <div className="product-list-item-top">
          <div className="product-list-item-title">{title}</div>
        </div>
        <div className="product-list-item-bottom">
          <div className="product-list-item-price">{price}</div>
          {isLike == null && (
            <div className="product-list-item-like">{"🤍"}</div>
          )}
        </div>
      </div>
    </div>
  );
}
