package com.shopping.shoppingback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductListItem {
  private int productId;             // 상품 아이디
  private int categoryId;            // 카테고리 아이디
  private String categoryImage;      // 카테고리 이미지
  private String title;              // 상품 이름
  private int price;                 // 상품 가격
  private String productImage;       // 상품 이미지
  private String productInfo;        // 상품 정보
  private String tagName;            // 상품 태그
  private int viewCount;             // 상품 조회수
}
