
import './style.css'

import ProductItem from "components/ProductItem/test";
import CategotyList from "components/CategoryList";
import PopularKeyword from "components/PopularKeyword";
import CategoryProductItem from "components/CategoryProductItem/test";

import { 
  top3ProductListMock,
  top3ProductListMock_test,
  categoryProductListMock,
  categoryProductListMock_bathroomTest,
  categoryProductListMock_kitchenTest, 
  popularKeywordListMock } from "mocks";

// component: 메인 화면 컴포넌트
export default function Main() {

  // render: 메인 화면 컴포넌트 렌더링
  return (
    <>
      <div>
        <div className="main">
          <div className="category-list">
            <CategotyList/>
          </div>
          <div className="main-content">
            <div className="top-3-product">
              <h1 className="top-3-product-title">금주의 Top 3 상품</h1>
              <div className="top-3-product-item">
                {top3ProductListMock_test.map((productList) => (
                  
                  <ProductItem productListItem={productList} />
                ))}
                
              </div>
            </div>
            <div className="category-product">
              <h1 className="category-product-title">카테고리별 상품</h1>
              
                <h2>욕실 상품</h2>
                <div className='category-product-list-item-tag'>
                <div className="category-product-list-item-category-image-box">
                  <img
                    className="category-product-list-item-category-image"
                    src={'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166848856331604255.jpg?w=1080'}
                    alt=""
                  />
                </div>
                <div className="category-product-item">
                  {categoryProductListMock_bathroomTest.map((categoryProductList) => (
                  <CategoryProductItem categoryProductListItem={categoryProductList} />
                ))}
              </div>
            </div>
            
            <h2>주방 상품</h2>
            <div className='category-product-list-item-tag'>
                <div className="category-product-list-item-category-image-box">
                  <img
                    className="category-product-list-item-category-image"
                    src={'https://img.freepik.com/premium-photo/vertical-photo-of-the-corridor-of-a-new-kitchen_385881-1225.jpg'}
                    alt=""
                  />
                </div>
            <div className="category-product-item">
                {categoryProductListMock_kitchenTest.map((categoryProductList) => (
                <CategoryProductItem categoryProductListItem={categoryProductList} />
              ))}
            </div>
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
  )
}