import React, { useEffect, useState } from "react";
import "./style.css";
import { ProductListItem } from "types/interface";
import useLoginUserStore from "stores/login-user.store";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

interface Props {
  productListItem: ProductListItem;
}

//          component: Product List Item 컴포넌트           //
export default function ProductItem({ productListItem }: Props) {
  //          interface: Properties          //
  const { price1, price2, price3, price4, isLike } = productListItem;
  const { title1, title2, title3, title4 } = productListItem;
  const { productImage1, productImage2, productImage3, productImage4 } =
    productListItem;
    // state: 로그인 유저 상태
    const { loginUser, resetLoginUser } = useLoginUserStore();
    // state: cookie 상태
    const [cookies, setCookie] = useCookies();
    // state: 로그인 상태
    const [isLogin, setLogin] = useState<boolean>(false);

  //          fucntion: 네비게이트 함수          //
  // const navigator = useNavigate();

    // effect: login user가 변경될 때마다 실행되는 함수
    useEffect(() => {
      setLogin(loginUser !== null);
      console.log('로그인유저가 변경될 때마다 실행되는 함수 !')
      console.log('loginUser',loginUser)
    }, [loginUser])
    
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
          src={productImage1}
          alt=""
        />
      </div>
      <div className="top-3-product-list-item-main-box">
        <div className="top-3-product-list-item-top">
          <div className="top-3-product-list-item-title">{title1}</div>
        </div>
        <div className="top-3-product-list-item-bottom">
          <div className="top-3-product-list-item-price">
            <div className="top-3-product-list-item-price-value">{price1}</div>
            <div className="top-3-product-list-item-price-unit"> 원</div>
          </div>
          {loginUser ?( isLike ? (
            <div className="top-3-product-list-item-like">{"🤍"}</div>
          ) : (
            <div className="top-3-product-list-item-like">{"💛"}</div>
          )): (<div className="top-3-product-list-item-like">{"🤍"}</div>)}
        </div>
      </div>
    </div>
  );
}
