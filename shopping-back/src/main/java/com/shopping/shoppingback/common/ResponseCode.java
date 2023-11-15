package com.shopping.shoppingback.common;

public interface ResponseCode {
  
  // HTTP Status 200
  String SUCCESS = "SU";

  // HTTP Status 400
  String VALIDATION_FAILED = "VF";
  String DUPLICATED_EMAIL = "DE";
  String DUPLICATED_NICKNAME = "DN";
  String DUPLICATED_TEL_NUMBER = "DT";
  String NOT_EXISTED_USER = "NU";
  String NOT_EXISTED_PRODUCT = "NEP";

  // HTTP Status 401
  String SIGN_IN_FAIL = "SF";
  String AUTHORIZATION_FAIL = "AF";

  // HTTP Status 403
  String NO_PERMISSION = "NP";

  // HTTP Status 500
  String DATABASE_ERROR = "DBE";
}
