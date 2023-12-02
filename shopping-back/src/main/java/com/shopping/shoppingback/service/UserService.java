package com.shopping.shoppingback.service;

import org.springframework.http.ResponseEntity;

import com.shopping.shoppingback.dto.response.user.GetSignInUserResponseDto;

public interface UserService {
    
    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String emailString);
    
}
