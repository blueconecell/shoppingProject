export default interface ProductListItem {
  productId: number; // 상품 아이디
  categoryId: number; // 카테고리 아이디
  categoryName: string; // 카테고리 이름
  categoryImage: string; // 카테고리 이미지
  title1: string; // 상품 이름1
  title2: string; // 상품 이름2
  title3: string; // 상품 이름3
  title4: string; // 상품 이름4
  price1: number; // 상품 가격1
  price2: number; // 상품 가격2
  price3: number; // 상품 가격3
  price4: number; // 상품 가격4
  productImage1: string; // 상품 이미지1
  productImage2: string; // 상품 이미지2
  productImage3: string; // 상품 이미지3
  productImage4: string; // 상품 이미지4
  productInfo1: string; // 상품 정보1
  productInfo2: string; // 상품 정보2
  productInfo3: string; // 상품 정보3
  productInfo4: string; // 상품 정보4
  tagName: string; // 상품 태그
  viewCount: number; // 상품 조회수
  isLike: boolean; // 상품 좋아요 여부
}
