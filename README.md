# shoppingProject

<details>
<summary>

**DDL**

</summary>

```SQL
        
CREATE TABLE category
(
  CATEGORY_ID    INT  NOT NULL COMMENT '카테고리 아이디',
  CATEGORY_NAME  TEXT NOT NULL COMMENT '카테고리 이름',
  category_image TEXT NOT NULL COMMENT '카테고리 이미지',
  PRIMARY KEY (CATEGORY_ID)
) COMMENT '카테고리 테이블';

CREATE TABLE likes
(
  nickname    VARCHAR(20) NOT NULL COMMENT '사용자 아이디',
  PRODUCT_ID INT         NOT NULL COMMENT '상품 아이디'
) COMMENT '상품 좋아요 테이블';

CREATE TABLE product
(
  PRODUCT_ID      INT  NOT NULL COMMENT '상품 아이디',
  product_title   TEXT NOT NULL COMMENT '상품 이름',
  view_count      INT  NOT NULL COMMENT '상품 조회수',
  product_image   TEXT NOT NULL COMMENT '상품 이미지',
  product_info    TEXT NOT NULL COMMENT '상품 정보',
  CATEGORY_ID     INT  NOT NULL COMMENT '카테고리 아이디',
  cheapest_price1 INT  NOT NULL COMMENT '최저가 가격1',
  cheapest_image1 TEXT NOT NULL COMMENT '최저가 브랜드 이미지1',
  cheapest_price2 INT  NOT NULL COMMENT '최저가 가격2',
  cheapest_image2 TEXT NOT NULL COMMENT '최저가 브랜드 이미지2',
  cheapest_price3 INT  NOT NULL COMMENT '최저가 가격3',
  cheapest_image3 TEXT NOT NULL COMMENT '최저가 브랜드 이미지3',
  cheapest_price4 INT  NOT NULL COMMENT '최저가 가격4',
  cheapest_image4 TEXT NOT NULL COMMENT '최저가 브랜드 이미지4',
  PRIMARY KEY (PRODUCT_ID)
) COMMENT '상품 테이블';

CREATE TABLE review
(
  REVIEW_ID       INT  NOT NULL COMMENT '리뷰 아이디',
  review_writer   TEXT NOT NULL COMMENT '리뷰 작성자 아이디',
  review_datetime DATE NOT NULL COMMENT '리뷰 작성일',
  review_content  TEXT NOT NULL COMMENT '리뷰 내용',
  PRODUCT_ID      INT  NOT NULL COMMENT '상품 아이디'
) COMMENT '리뷰 테이블';

CREATE TABLE tags
(
  PRODUCT_ID INT  NOT NULL COMMENT '상품 아이디',
  tag_name   TEXT NOT NULL COMMENT '태그명'
) COMMENT '태그 테이블';

CREATE TABLE user
(
  nickname       VARCHAR(20) NOT NULL COMMENT '사용자 아이디',
  email         VARCHAR(50) NOT NULL COMMENT '사용자 이메일',
  password      VARCHAR(100) NOT NULL COMMENT '사용자 비밀번호',
  profile_image TEXT        NULL     COMMENT '사용자 프로필 이미지',
  PRIMARY KEY (nickname)
) COMMENT '사용자 테이블';

ALTER TABLE product
  ADD CONSTRAINT FK_category_TO_product
    FOREIGN KEY (CATEGORY_ID)
    REFERENCES category (CATEGORY_ID);

ALTER TABLE review
  ADD CONSTRAINT FK_product_TO_review
    FOREIGN KEY (PRODUCT_ID)
    REFERENCES product (PRODUCT_ID);

ALTER TABLE likes
  ADD CONSTRAINT FK_user_TO_likes
    FOREIGN KEY (nickname)
    REFERENCES user (nickname);

ALTER TABLE likes
  ADD CONSTRAINT FK_product_TO_likes
    FOREIGN KEY (PRODUCT_ID)
    REFERENCES product (PRODUCT_ID);

ALTER TABLE tags
  ADD CONSTRAINT FK_product_TO_tags
    FOREIGN KEY (PRODUCT_ID)
    REFERENCES product (PRODUCT_ID);      
      
```

</details>