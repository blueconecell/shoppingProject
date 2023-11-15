package com.shopping.shoppingback.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.shopping.shoppingback.dto.request.auth.SignUpRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor

// entity를 사용할 것이디. 이름은 USER_ID 이다
@Entity(name="USER_ID")

// 객체인 class와 table을 매핑시켜야한다.
@Table(name = "user")
public class UserEntity {

    @Id
    private String userId;
    private String email;
    private String password;
    private String profile_image;

    // private String telNumber;
    // private String address;
    // private String addressDetail;
    // private boolean agreedPersonal;
    // 간단하게 entity를 만들어줄 수 있는데. 만들게되면 리포지토리를 추가해줘야함
    
    public UserEntity(SignUpRequestDto dto){
        this.userId = dto.getUserId();
        this.email = dto.getEmail();
        this.password = dto.getPassword();
        
        // this.telNumber = dto.getTelNumber();
        // this.address = dto.getAddress();
        // this.addressDetail = dto.getAddressDetail();
        // this.agreedPersonal = dto.getAgreedPersonal();
    }
}