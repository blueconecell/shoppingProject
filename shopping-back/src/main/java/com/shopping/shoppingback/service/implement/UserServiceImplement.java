package com.shopping.shoppingback.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.shopping.shoppingback.dto.response.ResponseDto;
import com.shopping.shoppingback.dto.response.user.GetSignInUserResponseDto;
import com.shopping.shoppingback.entity.UserEntity;
import com.shopping.shoppingback.repository.UserRepository;
import com.shopping.shoppingback.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {
    
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email) {
        
        UserEntity userEntity = null;
        
        try{

            userEntity = userRepository.findByEmail(email);
            if (userEntity == null) return GetSignInUserResponseDto.notExistUser();


        } catch(Exception exception){
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetSignInUserResponseDto.success(userEntity);
    }
    
}
