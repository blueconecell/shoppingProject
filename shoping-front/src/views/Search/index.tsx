import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";

// component: 검색 화면 컴포넌트
export default function Search() {
  const { searchWord } = useParams();
  console.log(searchWord);

  // render: 검색 화면 컴포넌트 렌더링
  return (
    <div className="search-result">
      <h2 className="search-text">{searchWord}</h2>
      <h3>에 대한 검색 결과가 없습니다.</h3>
    </div>
  );
}
