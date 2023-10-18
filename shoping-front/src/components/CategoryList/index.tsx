import React from 'react'
import "./style.css"
import { ProductListItem } from 'types/interface'

interface Props{
  categoryList: ProductListItem;
}

export default function CategoryList() {

  return (
    <div className='category-list-box'>
      <div className='category-list-title'>카테고리</div>
      <div className='category-list-content'>거실</div>
      <div className='category-list-content'>욕실</div>
      <div className='category-list-content'>주방</div>
      <div className='category-list-content'>침실</div>
      <div className='category-list-content'>다용도실</div>
      <div className='category-list-content'>세탁실</div>
      <div className='category-list-content'>화단</div>
      <div className='category-list-content'>현관</div>
    </div>
  )
}
