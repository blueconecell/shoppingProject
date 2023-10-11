package com.shopping.shoppingback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LikeListItem {
  private int productId;            // 상품 아이디
  private int categoryId;           // 카테고리 아이디
  private String title;             // 상품 이름
  private int price;                // 상품 가격
  private String productImage;      // 상품 이미지
  private Boolean islike;           // 상품 좋아요 여부
}
