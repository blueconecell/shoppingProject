package com.shopping.shoppingback.service;

import org.springframework.http.ResponseEntity;

public interface AuthService {

  ResponseEntity<? super SignUpResponseDto> singUp(SignUpResquestDto dto);


}
