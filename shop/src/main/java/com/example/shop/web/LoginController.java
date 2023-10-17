package com.example.shop.web;

import com.example.shop.Member;
import com.example.shop.MemberRepository;
import com.example.shop.web.dto.LoginRequest;
import com.example.shop.web.dto.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/login")
    @ResponseBody
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        // 1. 로그인 요청을 처리합니다.
        Member member = memberRepository.findById(loginRequest.getId()).orElse(null);

        if (member == null) {
            return new LoginResponse(false, "아이디가 존재하지 않습니다.");
        }

        if (!member.getPassword().equals(loginRequest.getPassword())) {
            return new LoginResponse(false, "비밀번호가 일치하지 않습니다.");
        }

        // 2. 로그인 성공을 알립니다.
        return new LoginResponse(true);
    }
}
