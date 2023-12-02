package com.shopping.shoppingback.dto.response.user;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.shopping.shoppingback.common.ResponseCode;
import com.shopping.shoppingback.common.ResponseMessage;
import com.shopping.shoppingback.dto.response.ResponseDto;
import com.shopping.shoppingback.entity.UserEntity;

import lombok.Getter;

@Getter
public class GetSignInUserResponseDto extends ResponseDto{
    private String email;
    private String nickname;
    private String profileImage;

    private GetSignInUserResponseDto(UserEntity userEntity){
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.email = userEntity.getEmail();
        this.nickname = userEntity.getNickname();
        this.profileImage = userEntity.getProfile_image();
    }
    // 성공 메서드 만들기
    public static ResponseEntity<GetSignInUserResponseDto> success(UserEntity userEntity){
        GetSignInUserResponseDto result = new GetSignInUserResponseDto(userEntity);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    // 유저 존재하지 않음 메서드 만들기
    public static ResponseEntity<ResponseDto> notExistUser(){
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
    }
}
