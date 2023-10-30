# API 명세서

# Auth

---

## 로그인

### **URL**

POST /api/v1/auth/sign-in

### **Header**

### **Request**

| Name     | Type            | Required | Description |
| -------- | --------------- | -------- | ----------- |
| id       | string / String | \*       | 아이디      |
| password | string / String | \*       | 비밀번호    |

**Request - Example**

```json
{
  "id": "qwer",
  "password": "P!ssw0rd"
}
```

### **Response**

**Success**

| Name           | Type            | Required | Description |
| -------------- | --------------- | -------- | ----------- |
| code           | string / String | \*       | 코드        |
| message        | string / String | \*       | 메세지      |
| token          | string / String | \*       | JWT         |
| expirationTime | number / int    | \*       | 만료 시간   |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"token": "",
	"expirationTime": 3600
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 400 (Bad Request)

{
	"code": "VF",
	"message": "Validation failed."
}
```

```json
Http Status - 401 (Unauthorized)

{
	"code": "SF",
	"message": "Login information mismatch."
}
```

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

## 회원가입

**URL**

POST /api/v1/auth/sign-up

**Header**

**Request**

| Name     | Type            | Required | Description |
| -------- | --------------- | -------- | ----------- |
| id       | string / String | \*       | 아이디      |
| password | string / String | \*       | 비밀번호    |
| email    | string / String | \*       | 이메일      |

**Requet - Example**

```json
{
  "id": "qwer",
  "password": "P!ssw0rd",
  "email": "email@email.com"
}
```

### **Response**

**Success**

| Name    | Type            | Required | Description |
| ------- | --------------- | -------- | ----------- |
| code    | string / String | \*       | 코드        |
| message | string / String | \*       | 메세지      |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success."
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 400 (Bad Request)

{
	"code": "VF",
	"message": "Validation failed."
}
```

```json
Http Status - 400 (Bad Request)

{
	"code": "DE",
	"message": "Duplicate email."
}
```

```json
Http Status - 401 (Unauthorized)

{
	"code": "SF",
	"message": "Login information mismatch."
}
```

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

# Product

---

## Top3 상품 리스트

**URL**

GET /api/v1/product/top-3

**Header**

**Request**

### **Response**

**Success**

| Name     | Type              | Required | Description              |
| -------- | ----------------- | -------- | ------------------------ |
| code     | string / String   | \*       | 코드                     |
| message  | string / String   | \*       | 메세지                   |
| top3List | ProductListItem[] | \*       | top-3 상품 리스트 아이템 |

**ProductListItem**

| Name         | Type            | Required | Description     |
| ------------ | --------------- | -------- | --------------- |
| productId    | number / int    | \*       | 상품 아이디     |
| categoryId   | number / int    | \*       | 카테고리 아이디 |
| title        | string / String | \*       | 상품 이름       |
| viewCount    | number / int    | \*       | 상품 조회수     |
| price        | number / int    | \*       | 상품 가격       |
| productImage | string / String | \*       | 상품 이미지     |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"top3List": [
		{
			"productId": 0,
			"categoryId": 0,
			"title": "코멧 순백 3겹 라벤더 바닐라 롤화장지 30m 30롤, 1팩",
			"viewCount": 0,
			"price": 0
			"productImage": null,
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

## 카테고리별 상품 리스트

**URL**

GET /api/v1/product/category

**Header**

**Request**

### **Response**

**Success**

| Name                | Type              | Required | Description                 |
| ------------------- | ----------------- | -------- | --------------------------- |
| code                | string / String   | \*       | 코드                        |
| message             | string / String   | \*       | 메세지                      |
| categoryProductList | ProductListItem[] | \*       | 카테고리 상품 리스트 아이템 |

**ProductListItem**

| Name          | Type            | Required | Description     |
| ------------- | --------------- | -------- | --------------- |
| productId     | number / int    | \*       | 상품 아이디     |
| categoryId    | number / int    | \*       | 카테고리 아이디 |
| categoryImage | string / String | \*       | 카테고리 이미지 |
| title         | string / String | \*       | 상품 이름       |
| price         | number / int    | \*       | 상품 가격       |
| productImage  | string / String | \*       | 상품이미지      |
| tagName       | string / String | \*       | 상품 태그       |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"categoryProductList": [
		{
			"productId": 0,
			"categoryId": 0,
			"categoryImage": null,
			"title": "코멧 순백 3겹 라벤더 바닐라 롤화장지 30m 30롤, 1팩",
			"price": 0,
			"productImage": null,
			"tagName": "화장지"
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

## 상세 상품 리스트(상세 상품 페이지)

**URL**

GET /api/v1/product/category-detail

**Header**

**Request**

### **Response**

**Success**

| Name           | Type              | Required | Description             |
| -------------- | ----------------- | -------- | ----------------------- |
| code           | string / String   | \*       | 코드                    |
| message        | string / String   | \*       | 메세지                  |
| categoryDetail | ProductListItem[] | \*       | 상세 상품 리스트 아이템 |

**ProductListItem**

| Name         | Type            | Required | Description     |
| ------------ | --------------- | -------- | --------------- |
| productId    | number / int    | \*       | 상품 아이디     |
| categoryId   | number / int    | \*       | 카테고리 아이디 |
| title        | string / String | \*       | 상품 이름       |
| price        | number / int    | \*       | 상품 가격       |
| productImage | string / String | \*       | 상품이미지      |
| productInfo  | string / String | \*       | 상품 정보       |
|              |                 |          | 리뷰            |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"categoryProductList": [
		{
			"productId": 0,
			"categoryId": 0,
			"categoryImage": null,
			"title": "코멧 순백 3겹 라벤더 바닐라 롤화장지 30m 30롤, 1팩",
			"viewCount": 0,
			"price": 0,
			"productImage": null,
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

## 상품 리뷰 리스트(상세 상품 페이지)

**URL**

GET /api/v1/product/category-review

**Header**

**Request**

### **Response**

**Success**

| Name           | Type              | Required | Description             |
| -------------- | ----------------- | -------- | ----------------------- |
| code           | string / String   | \*       | 코드                    |
| message        | string / String   | \*       | 메세지                  |
| categoryReview | ProductListItem[] | \*       | 상품 리뷰 리스트 아이템 |

**ProductListItem**

| Name          | Type            | Required | Description        |
| ------------- | --------------- | -------- | ------------------ |
| id            | int / Int       | \*       | 리뷰 아이디        |
| writerId      | string / String | \*       | 리뷰 작성자 아이디 |
| writeDatetime | string / String | \*       | 리뷰 작성일        |
| content       | string / String | \*       | 리뷰 내용          |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"categoryProductList": [
		{
			"productId": 0,
			"categoryId": 0,
			"categoryImage": null,
			"title": "코멧 순백 3겹 라벤더 바닐라 롤화장지 30m 30롤, 1팩",
			"viewCount": 0,
			"price": 0,
			"productImage": null,
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

## 좋아요 리스트

**URL**

GET /api/v1/user/like

**Header**

**Request**

### **Response**

**Success**

| Name     | Type              | Required | Description             |
| -------- | ----------------- | -------- | ----------------------- |
| code     | string / String   | \*       | 코드                    |
| message  | string / String   | \*       | 메세지                  |
| userLike | ProductListItem[] | \*       | 유저 좋아요 상품 리스트 |

**ProductListItem**

| Name         | Type              | Required | Description      |
| ------------ | ----------------- | -------- | ---------------- |
| productId    | number / int      | \*       | 상품 아이디      |
| categoryId   | number / int      | \*       | 카테고리 아이디  |
| title        | string / String   | \*       | 상품 이름        |
| price        | number / int      | \*       | 상품 가격        |
| productImage | string / String   | \*       | 상품이미지       |
| islike       | boolean / Boolean | \*       | 상품 좋아요 여부 |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"categoryProductList": [
		{
			"productId": 0,
			"categoryId": 0,
			"categoryImage": null,
			"title": "코멧 순백 3겹 라벤더 바닐라 롤화장지 30m 30롤, 1팩",
			"viewCount": 0,
			"price": 0,
			"productImage": null,
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

# Search

---

## 인기 검색어 리스트

**URL**

GET /api/v1/search/popular-list

**Header**

**Request**

### **Response**

**Success**

| Name            | Type                | Required | Description        |
| --------------- | ------------------- | -------- | ------------------ |
| code            | string / String     | \*       | 코드               |
| message         | string / String     | \*       | 메세지             |
| popularWordList | string[] / String[] | \*       | 인기 검색어 리스트 |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"top3List": ["휴지", "물", "수건", "이불", "폼클렌징", "치약", "키친타올", "충전기"]
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 500 (Internal Serrver Error)

{
	"code": "DBE",
	"message": "Database error."
}
```

---

# User

---

## 유저 정보

**URL**

GET /api/v1/user/{email}

**Header**

**Request**

### **Response**

**Success**

| Name         | Type            | Required | Description   |
| ------------ | --------------- | -------- | ------------- |
| code         | string / String | \*       | 코드          |
| message      | string / String | \*       | 메세지        |
| id           | string / String | \*       | 아이디        |
| password     | string / String | \*       | 비밀번호      |
| email        | string / String | \*       | 이메일        |
| profileImage | string / String |          | 프로필 이미지 |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"id": "qwer",
	"password": "P!ssw0rd",
	"email": "email@email.com",
	"profileImage": "",
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 400 (Bad Request)

{
    code: "NU",
    message: "This user does not exist."
}
```

```json
Http Status - 500 (Internal Server Error)

{
    "code": "DBE",
    "message": "Database error."
}
```

---

## 로그인 유저 정보

**URL**

GET /api/v1/user

**Header**

| Name          | Value        |
| ------------- | ------------ |
| Authorization | Bearer Token |

**Request**

### **Response**

**Success**

| Name         | Type            | Required | Description   |
| ------------ | --------------- | -------- | ------------- |
| code         | string / String | \*       | 코드          |
| message      | string / String | \*       | 메세지        |
| id           | string / String | \*       | 아이디        |
| password     | string / String | \*       | 비밀번호      |
| email        | string / String | \*       | 이메일        |
| profileImage | string / String |          | 프로필 이미지 |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
	"id": "qwer",
	"password": "P!ssw0rd",
	"email": "email@email.com",
	"profileImage": "",
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**

```json
Http Status - 400 (Bad Request)

{
    code: "NU",
    message: "This user does not exist."
}
```

```json
Http Status - 401 (Unauthorized)

{
    code: "AF",
    message: "Authorization Failed."
}
```

```json
Http Status - 500 (Internal Server Error)

{
    "code": "DBE",
    "message": "Database error."
}
```

---

## 프로필 이미지 수정

**URL**

PATCH /api/v1/user/profile-image

**Header**

| Name          | Value        |
| ------------- | ------------ |
| Authorization | Bearer Token |

**Request**

| Name         | Type   | Required      | Description |
| ------------ | ------ | ------------- | ----------- | ------------- |
| profileImage | string | null / String |             | 프로필 이미지 |

**Example**

```json
{
  "profileImage": ""
}
```

### **Response**

**Success**

| Name    | Type            | Required | Description |
| ------- | --------------- | -------- | ----------- |
| code    | string / String | \*       | 코드        |
| message | string / String | \*       | 메세지      |

**Response - Example**

```json
Http Status - 200 (OK)

{
	"code": "SU",
	"message": "Success.",
}
```

### **Fail**

| Name    | Type            | Required | Dscription |
| ------- | --------------- | -------- | ---------- |
| code    | string / String | \*       | 코드       |
| message | string / String | \*       | 메세지     |

**Fail - Example**
