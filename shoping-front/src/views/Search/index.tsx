import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom';

// component: 검색 화면 컴포넌트
export default function Search() {
  const { searchWord } = useParams();
  console.log(searchWord)

  // render: 검색 화면 컴포넌트 렌더링
  return (
    <div>
      <h2>Search Results for: {searchWord}</h2>
    </div>
  )
}
