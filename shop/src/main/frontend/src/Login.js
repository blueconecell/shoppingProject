import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 로그인 요청
        if (id && password) {
            const response = await axios.post("/login", {
                id,
                password,
            });

            // 로그인 처리 결과 확인
            if (response.status === 200) {
                if (response.data.success) {
                    // 로그인 성공
                    alert("로그인 성공!");
                } else {
                    // 로그인 실패
                    alert("로그인 실패: " + response.data.message);
                }
            } else {
                // 로그인 요청 실패
                alert("로그인 요청 실패: " + response.statusText);
            }
        } else {
            alert("아이디 또는 비밀번호를 입력하세요.");
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;
