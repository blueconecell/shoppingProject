package com.shopping.shoppingback.service;

import org.springframework.http.ResponseEntity;

import com.shopping.shoppingback.dto.request.auth.SignUpRequestDto;
import com.shopping.shoppingback.dto.response.auth.SignUpResponseDto;

public interface AuthService {
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
}