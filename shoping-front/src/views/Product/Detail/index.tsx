import React from 'react'
import './style.css'
import ProductItem from 'components/ProductItem/test'
import { products } from 'mocks'

// component: 게시물 상세 화면 컴포넌트
export default function ProductDetail() {

  // render: 게시물 상세 화면 컴포넌트 렌더링
  return (
    <div className='product'>
      <div className="top-3-product-item">
        {products.map((productList) => (
        <ProductItem productListItem={productList} />
        ))}
      </div>
    </div>
  )
}
