export const MAIN_PATH = () => '/';
export const AUTH_PATH = () => '/auth';
export const SEARCH_PATH = (searchWord: string) => `/search/${searchWord}`;
export const USER_PATH = (userEmail:string) => `/user/${userEmail}`;
export const PRODUCT_PATH = () => `/Product`;
export const PRODUCT_DETAIL_PATH = (ProductNumber: string | number) => `detail/${ProductNumber}`;
