import React from "react";
import "./style.css";
import { ProductInfo } from "types/interface";
import useLoginUserStore from "stores/login-user.store";
// import { useNavigate } from "react-router-dom";

interface Props {
  categoryProductListItem: ProductInfo;
}

//          component: Category Product List Item 컴포넌트          //
export default function CategoryProductItem({categoryProductListItem}: Props) {
  //          interface: Properties          //
  const { categoryName, categoryImage, title, price, productImage, isLike, productInfo } = categoryProductListItem;
  // state: 로그인 유저 상태
  const { loginUser, resetLoginUser } = useLoginUserStore();

  //          event handler: 카테고리 상품 클릭 이벤트 처리 함수          //
  const onClickHandler = () => {
    //
  };
  //          event handler: 게시물 이미지 클릭 이벤트 처리 함수          //
  const imageClickHandler = () => {
    window.location.href = productInfo
  };
  // event handler: 좋아요 버튼 클릭 핸들러
  const isLikeClickHandler = () =>{
    if(!loginUser){
      alert("로그인 필요!")
      return;
    }
    if (isLike){
      alert('좋아요 상태가 해지됩니다.')
      return;
    }
    alert('좋아요 상태로 전환됩니다.')
      return;
  }

  //          render: Category Product List Item 컴포넌트 렌더링          //
  return (
    <div className="category-product-list-item" onClick={onClickHandler}>
      {/* <div className="category-product-list-item-title">
        <h2>{categoryName} 상품</h2>
      </div> */}
      <div className="category-product-list-item-main">
        {/* <div className="category-product-list-item-category-image-box">
          <img
            className="category-product-list-item-category-image"
            src={categoryImage}
            alt=""
          />
        </div> */}
        <div className="category-product-list-item-product-list">
          <div className="category-product-list-item-product-list-column">
            <div className="category-product-list-item-product">
              <div className="category-product-list-item-product-image-box" onClick={imageClickHandler} >
                <img
                  className="category-product-list-item-product-image"
                  src={productImage}
                  alt=""
                />
              </div>
              <div className="category-product-list-item-top">
                <div className="category-product-list-item-title">{title}</div>
              </div>
              <div className="category-product-list-item-bottom">
                <div className="category-product-list-item-price">
                  <div className="category-product-list-item-price-value">
                    {price}
                  </div>
                  <div className="category-product-list-item-price-unit">
                    원
                  </div>
                </div>
                {loginUser ?( isLike ? (
                  <div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🧡"}</div>
                  ) : (
                    <div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🤍"}</div>
                  )): (<div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🤍"}</div>)}
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
}
