import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import UserP from 'views/User';
import Search from 'views/Search';
import ProductDetail from 'views/Product/Detail';
import Authentication from 'views/Authentication';

import Container from 'layouts/Container';

import { MAIN_PATH, AUTH_PATH, SEARCH_PATH, USER_PATH, PRODUCT_PATH, PRODUCT_DETAIL_PATH } from 'constant';
import { useEffect } from "react";
import useLoginUserStore from "stores/login-user.store";
import { useCookies } from "react-cookie";
import { ResponseDto } from "apis/response";
import { User } from "types/interface";
import { GetSignInUserResponseDto } from "apis/response/user";
import { getSignInUserRequest } from "apis";

function App() {
  // state: 로그인 유저 전역 상태
  const {setLoginUser, resetLoginUser } = useLoginUserStore();
  // state: cookie 상태
  const [cookies, setCookie] = useCookies();

  // function: get sign in user response 처리함수
  const getSignInUserResponse = (responseBody: GetSignInUserResponseDto | ResponseDto | null)=>{
    if (!responseBody) return;

    const {code} = responseBody;
    if (code === 'AF' || code === 'NU' || code === 'DBE'){
      resetLoginUser();
      return;
    }
    const loginUser: User = { ...(responseBody as GetSignInUserResponseDto) };
    console.log('유저가져오기 성공!')
    console.log('loginUser :',loginUser)
    console.log('responseBody :',responseBody)
    setLoginUser(loginUser);
  }
  // effect: accessToken cookie 값이 변경 될 때마다 실행할 함수
  useEffect(() => {
    console.log('토큰 변경 !')
    console.log('쿠기확인하기! : cookies.accessToken',cookies.accessToken)
    if (!cookies.accessToken){
      resetLoginUser();
      return;
    }
    
    getSignInUserRequest(cookies.accessToken).then(getSignInUserResponse);
  }, [cookies.accessToken]);










  return (
    <Routes>
      <Route element={<Container/>}>
        <Route path={MAIN_PATH()} element={<Main />}/>
        <Route path={AUTH_PATH()} element={<Authentication />}/>
        <Route path={SEARCH_PATH(":searchWord")} element={<Search />}/>
        <Route path={USER_PATH(":userEmail")} element={<UserP />}/>
        <Route path={PRODUCT_PATH()}>
          <Route path={PRODUCT_DETAIL_PATH(":boardNumber")} element={<ProductDetail />}/>
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Route>
    </Routes>
      );
}

export default App;
