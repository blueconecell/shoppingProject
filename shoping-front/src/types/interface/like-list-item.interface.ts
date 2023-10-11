export default interface LikeListItem {
  productId: number; // 상품 아이디
  categoryId: number; // 카테고리 아이디
  title: string; // 상품 이름
  price: number; // 상품 가격
  productImage: string; // 상품 이미지
  isLike: boolean; // 상품 좋아요 여부
}
