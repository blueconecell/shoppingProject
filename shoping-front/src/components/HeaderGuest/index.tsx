import React from "react";
import "./style.css";
import { ProductListItem } from "types/interface";
// import { useNavigate } from "react-router-dom";

interface Props {
}

//          component:           //
export default function HeaderGuest({
}: Props) {
  //          properties          //


  //          event handler:     //
  const onClickHandler = () => {
    //
  };

  //          render: header 컴포넌트 렌더링          //
  return (
    <div className="header-main">
      <div className="header-logo">Logo</div>
      <div className="header-search-bar">
        <div className="header-search-bar-button"></div>
      </div>
      <div className="header-profile">
        <div className="header-login">로그인</div>
        <div className="header-signin">회원가입</div>
      </div>
    </div>
  );
}
