package com.example.shop.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponse {

    private boolean success;
    private String message;

    public LoginResponse(boolean success) {
        this.success = success;
    }

}
