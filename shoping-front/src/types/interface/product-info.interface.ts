
// 상품 mock 테스트

export default interface ProductInfo {
    productId: number; // 상품 아이디
    categoryId: number; // 카테고리 아이디
    categoryName: string; // 카테고리 이름
    categoryImage: string; // 카테고리 이미지
    title: string; // 상품 이름
    price: number; // 상품 가격
    productImage: string; // 상품 이미지
    productInfo: string; // 상품 정보
    tagName: string; // 상품 태그
    viewCount: number; // 상품 조회수
    isLike: boolean; // 상품 좋아요 여부 -> 좋아요 정보만 따로 만들면 없어져야함
  }
  