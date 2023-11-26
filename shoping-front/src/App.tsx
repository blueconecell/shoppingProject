import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import User from 'views/User';
import Search from 'views/Search';
import ProductDetail from 'views/Product/Detail';
import Authentication from 'views/Authentication';

import Container from 'layouts/Container';

import { MAIN_PATH, AUTH_PATH, SEARCH_PATH, USER_PATH, PRODUCT_PATH, PRODUCT_DETAIL_PATH } from 'constant';

function App() {
  return (
    <Routes>
      <Route element={<Container/>}>
        <Route path={MAIN_PATH()} element={<Main />}/>
        <Route path={AUTH_PATH()} element={<Authentication />}/>
        <Route path={SEARCH_PATH(":searchWord")} element={<Search />}/>
        <Route path={USER_PATH(":userEmail")} element={<User />}/>
        <Route path={PRODUCT_PATH()}>
          <Route path={PRODUCT_DETAIL_PATH(":boardNumber")} element={<ProductDetail />}/>
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Route>
    </Routes>
      );
}

export default App;
