import React from 'react'
import "./style.css"
import { popularKeywordList } from 'types/interface';

interface Props{
    popularKeywordList: popularKeywordList;
}
export default function PopularKeyword({popularKeywordList,
}: Props) {
  const {keyWord, viewCount} = popularKeywordList;

  // event handler : 인기 검색어 클릭 이벤트 처리 함수
  const onClickHandler = () => {
    //
  };
    
    return (
        <div className='popular-keyword-box'>
          <div className='popular-keyword-title'>인기 검색어</div>
          <div className='popular-keyword-content'>휴지</div>
          <div className='popular-keyword-content'>물</div>
          <div className='popular-keyword-content'>수건</div>
          <div className='popular-keyword-content'>이불</div>
          <div className='popular-keyword-content'>폼클렌징</div>
          <div className='popular-keyword-content'>치약</div>
          <div className='popular-keyword-content'>치킨타올</div>
          <div className='popular-keyword-content'>충전기</div>
        </div>
      )
}
