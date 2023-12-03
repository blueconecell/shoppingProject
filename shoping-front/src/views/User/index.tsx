import React from 'react'
import './style.css'
import useLoginUserStore from 'stores/login-user.store';

// component: 유저 화면 컴포넌트
export default function User() {
  const { loginUser } = useLoginUserStore();

  // render: 유저 화면 컴포넌트 렌더링
  return (
    <div className='user-card'>
      <div className='user-card-nickname'>"{loginUser?.nickname}" 님 반갑습니다!</div>
      <div className='user-card-email'>이메일 : {loginUser?.email}</div>
    </div>

  )
}
