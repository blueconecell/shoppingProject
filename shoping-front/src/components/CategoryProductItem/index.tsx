import React from "react";
import "./style.css";
import { ProductListItem } from "types/interface";
// import { useNavigate } from "react-router-dom";

interface Props {
  categoryProductListItem: ProductListItem;
}

//          component: Category Product List Item 컴포넌트          //
export default function CategoryProductItem({
  categoryProductListItem,
}: Props) {
  //          interface: Properties          //
  const { productId, categoryId, categoryImage, categoryName } =
    categoryProductListItem;
  const { title, price, productImage } = categoryProductListItem;
  const { tagName, viewCount, isLike } = categoryProductListItem;

  //          event handler: 카테고리 상품 클릭 이벤트 처리 함수          //
  const onClickHandler = () => {
    //
  };

  //          render: Category Product List Item 컴포넌트 렌더링          //
  return (
    <div className="category-product-list-item" onClick={onClickHandler}>
      <div className="category-product-list-item-title">
        <h2>{categoryName} 상품</h2>
      </div>
      <div className="category-product-list-item-main">
        <div className="category-product-list-item-category-image-box">
          <img
            className="category-product-list-item-category-image"
            src={categoryImage}
            alt=""
          />
        </div>
        <div className="category-product-list-item-product-list">
          <div className="category-product-list-item-product-list-column">
            <div className="category-product-list-item-product">
              <div className="category-product-list-item-product-image-box">
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
                {isLike ? (
                  <div className="category-product-list-item-like">{"🤍"}</div>
                ) : (
                  <div className="category-product-list-item-like">{"💛"}</div>
                )}
              </div>
            </div>
            <div className="category-product-list-item-product">
              <div className="category-product-list-item-product-image-box">
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
                    {" "}
                    원
                  </div>
                </div>
                {isLike ? (
                  <div className="category-product-list-item-like">{"🤍"}</div>
                ) : (
                  <div className="category-product-list-item-like">{"💛"}</div>
                )}
              </div>
            </div>
          </div>
          <div className="category-product-list-item-product-list-column">
            <div className="category-product-list-item-product">
              <div className="category-product-list-item-product-image-box">
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
                    {" "}
                    원
                  </div>
                </div>
                {isLike ? (
                  <div className="category-product-list-item-like">{"🤍"}</div>
                ) : (
                  <div className="category-product-list-item-like">{"💛"}</div>
                )}
              </div>
            </div>
            <div className="category-product-list-item-product">
              <div className="category-product-list-item-product-image-box">
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
                    {" "}
                    원
                  </div>
                </div>
                {isLike ? (
                  <div className="category-product-list-item-like">{"🤍"}</div>
                ) : (
                  <div className="category-product-list-item-like">{"💛"}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
