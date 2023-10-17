package com.example.shop.service;

import com.example.shop.web.dto.LoginRequest;
import com.example.shop.MemberRepository;
import com.example.shop.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private MemberRepository memberRepository;

    // 로그인 처리
    public boolean login(LoginRequest loginRequest) {
        // admin 계정인지 여부 확인
        if ("admin".equals(loginRequest.getId()) && "0000".equals(loginRequest.getPassword())) {
            // admin 계정 로그인 성공
            return true;
        } else {
            // 데이터베이스에서 회원 정보를 조회
            Optional<Member> member = memberRepository.findById(loginRequest.getId());

            // 회원 정보가 존재하지 않는 경우
            if (!member.isPresent()) {
                return false;
            }

            // 비밀번호가 일치하지 않는 경우
            if (!member.get().getPassword().equals(loginRequest.getPassword())) {
                return false;
            }

            // 로그인 성공
            return true;
        }
    }

}
