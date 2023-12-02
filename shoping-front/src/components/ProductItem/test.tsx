import React, { useEffect, useState } from "react";
import "./style.css";
import { ProductInfo } from "types/interface";
import useLoginUserStore from "stores/login-user.store";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

interface Props {
  productListItem: ProductInfo;
}

//          component: Product List Item 컴포넌트           //
export default function ProductItem({ productListItem }: Props) {
  //          interface: Properties          //
  const { title, price, productImage, isLike, productInfo } = productListItem;
  // state: 로그인 유저 상태
  const { loginUser, resetLoginUser } = useLoginUserStore();
  // state: cookie 상태
  const [cookies, setCookie] = useCookies();
  // state: 로그인 상태
  const [isLogin, setLogin] = useState<boolean>(false);

  //          fucntion: 네비게이트 함수          //
  // const navigator = useNavigate();

  // /
  //          event handler: 게시물 이미지 클릭 이벤트 처리 함수          //
  const imageClickHandler = () => {
    window.location.href = productInfo
  };
  // event handler: 
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

  //          render: Product List Item 컴포넌트 렌더링          //
  return (
    <div className="top-3-product-list-item">
      <div className="top-3-product-list-item-image-box" onClick={imageClickHandler} >
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
          {loginUser ?( isLike ? (
            <div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🧡"}</div>
          ) : (
            <div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🤍"}</div>
          )): (<div className="top-3-product-list-item-like" onClick={isLikeClickHandler}>{"🤍"}</div>)}
        </div>
      </div>
    </div>
  );
}
