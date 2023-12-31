import { useState, KeyboardEvent, useRef, ChangeEvent } from "react";
import "./style.css";
import InputBox from "components/InputBox";
import { signInRequest, signUpRequest } from "apis";
import { SignInRequestDto, SignUpRequestDto } from "apis/request/auth";
import { SignInResponseDto, SignUpResponseDto } from "apis/response/auth";
import { ResponseDto } from "apis/response";
import { useCookies } from "react-cookie";
import { MAIN_PATH } from "constant";
import { useNavigate } from "react-router-dom";

// component : 인증화면 컴포넌트
export default function Authentication() {
  // state: 화면 상태 정해주기
  const [view, setView] = useState<"sign-in" | "sign-up">("sign-in");

  // state: 쿠키 상태
  const [Cookies, setCookie] = useCookies();

  // function: 네비게이트 함수 만들어주기
  const navigator = useNavigate();

  // component: sign in card 컴포넌트
  const SignInCard = () => {
    // state: 이메일 요소 참조 상태
    const emailRef = useRef<HTMLInputElement | null>(null);
    // state: 패스워드 요소 참조 상태
    const passwordRef = useRef<HTMLInputElement | null>(null);
    // state: 이메일 상태
    const [email, setEmail] = useState<string>("");
    // state: 비밀번호 상태
    const [password, setPassword] = useState<string>("");
    // state: 비밀번호 type 상태
    const [passwordType, setPasswordType] = useState<"text" | "password">(
      "password"
    );
    // state: 비밀번호 아이콘 상태
    const [passwordButtonIcon, setPasswordButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");
    // state: error 상태
    const [error, setError] = useState<boolean>(false);

    // function: sign in response 처리함수
    const signInResponse = (
      responseBody: SignInResponseDto | ResponseDto | null
    ) => {
      if (!responseBody) {
        alert("네트워크 이상입니다.");
        return;
      }
      const { code } = responseBody;
      if (code === "DBE") alert("데이터베이스 오류입니다.");
      if (code === "SF" || code === "VF") setError(true);
      if (code !== "SU") return;

      const { token, expirationTime } = responseBody as SignInResponseDto;
      const now = new Date().getTime();
      // 현재시간은 밀리세컨드이기 때문에 1000곱하기 -> 만료시간 계산해주기
      const expires = new Date(now + expirationTime * 1000);

      setCookie("accessToken", token, { expires, path: MAIN_PATH() });
      navigator(MAIN_PATH());
    };
    // event handler: 이메일 변경 이벤트 처리
    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const { value } = event.target;
      setEmail(value);
    };
    // event handler: 비밀번호 변경 이벤트 처리
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const { value } = event.target;
      setPassword(value);
    };

    // event handler: 로그인 버튼 클릭 이벤트 처리 함수
    const onSignInButtonClickHandler = () => {
      const requestBody: SignInRequestDto = { email, password };
      signInRequest(requestBody).then(signInResponse);
    };

    // event handler: 패스워드 버튼 클릭 이벤트 처리 함수
    const onPasswordButtonClickHandler = () => {
      if (passwordType === "text") {
        setPasswordType("password");
        setPasswordButtonIcon("eye-light-off-icon");
      } else {
        setPasswordType("text");
        setPasswordButtonIcon("eye-light-on-icon");
      }
    };

    // event handler: 이메일 인풋 키 다운 이벤트 처리 함수
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter") return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    };
    // event handler: 회원가입 링크 클릭 이벤트 처리 함수
    const onSignUpLinkClickHandler = () => {
      setView("sign-up");
    };

    // event handler: 패스워드 인풋 키 다운 이벤트 처리 함수
    const onPasswordKeyDownHandler = (
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key !== "Enter") return;
      onSignInButtonClickHandler();
    };

    // render: sign in card rendering
    return (
      <div className="auth-card">
        <div className="auth-card-box">
          <div className="auth-card-top">
            <div className="auth-card-title-box">
              <div className="auth-card-title">{"로그인"}</div>
            </div>
            <InputBox
              ref={emailRef}
              label="이메일 주소"
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              error={error}
              value={email}
              onChange={onEmailChangeHandler}
              onKeyDown={onEmailKeyDownHandler}
            />
            <InputBox
              ref={passwordRef}
              label="비밀번호"
              type={passwordType}
              placeholder="비밀번호를 입력해주세요."
              error={error}
              value={password}
              onChange={onPasswordChangeHandler}
              icon={passwordButtonIcon}
              onButtonClick={onPasswordButtonClickHandler}
              onKeyDown={onPasswordKeyDownHandler}
            />
          </div>
          <div className="auth-card-bottom">
            {error && (
              <div className="auth-sign-in-error-box">
                <div className="auth-sign-in-error-message">
                  {
                    "이메일 주소 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요."
                  }
                </div>
              </div>
            )}

            <div
              className="black-large-full-button"
              onClick={onSignInButtonClickHandler}
            >
              {"로그인"}
            </div>
            <div className="auth-description-box">
              <div className="auth-description">
                {"신규 사용자이신가요? "}
                <span
                  className="auth-description-link"
                  onClick={onSignUpLinkClickHandler}
                >
                  {"회원가입"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // component: sign up card 컴포넌트
  const SignUpCard = () => {
    // state: 이메일 요소 참조 상태
    const emailRef = useRef<HTMLInputElement | null>(null);
    // state: 패스워드 요소 참조 상태
    const passwordRef = useRef<HTMLInputElement | null>(null);
    // state: 패스워드 확인 요소 참조 상태
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);
    // state: 닉네임 요소 참조 상태
    const nicknameRef = useRef<HTMLInputElement | null>(null);

    // state: 이메일 상태
    const [email, setEmail] = useState<string>("");
    // state: 패스워드 상태
    const [password, setPassword] = useState<string>("");
    // state: 패스워드 확인 상태
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    // state: 패스워드 type 상태
    const [passwordType, setPasswordType] = useState<"text" | "password">(
      "password"
    );
    // state: 패스워드 확인 type 상태
    const [passwordCheckType, setPasswordCheckType] = useState<
      "text" | "password"
    >("password");
    // state: 닉네임 상태
    const [nickname, setNickname] = useState<string>("");

    // state: 이메일 에러 상태
    const [isEmailError, setEmailError] = useState<boolean>(false);
    // state: 패스워드 에러 상태
    const [isPasswordError, setPasswordError] = useState<boolean>(false);
    // state: 패스워드 확인 에러 상태
    const [isPasswordCheckError, setPasswordCheckError] =
      useState<boolean>(false);
    // state: 닉네임 에러 상태
    const [isNicknameError, setNicknameError] = useState<boolean>(false);

    // state: 이메일 에러 메세지 상태
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
    // state: 패스워드 에러 메세지 상태
    const [passwordErrorMessage, setPasswordErrorMessage] =
      useState<string>("");
    // state: 패스워드 체크 에러 메세지 상태
    const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
      useState<string>("");
    // state: 닉네임 에러 메세지 상태
    const [nicknameErrorMessage, setNicknameErrorMessage] =
      useState<string>("");
    // state: 패스워드 버튼 아이콘 상태
    const [passwordButtonIcon, setPasswordButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");
    // state: 패스워드 확인 버튼 아이콘 상태
    const [passwordCheckButtonIcon, setPasswordCheckButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");

    // function: sign up response 처리 함수
    const signUpResponse = (
      responseBody: SignUpResponseDto | ResponseDto | null
    ) => {
      if (!responseBody) {
        alert("네트워크 이상입니다");
        return;
      }
      const { code } = responseBody;
      if (code === "DE") {
        setEmailError(true);
        setEmailErrorMessage("중복되는 이메일 주소입니다.");
      }
      if (code === "DN") {
        setNicknameError(true);
        setNicknameErrorMessage("중복되는 닉네임입니다.");
      }

      if (code === "VF") alert("모든 값을 입력하세요");
      if (code === "DBE") alert("데이터베이스 오류입니다.");
      if (code === "SU") return;
      setView("sign-in");
    };

    // event handler: 이메일 변경 이벤트 처리
    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setEmail(value);
      setEmailError(false);
      setEmailErrorMessage("");
    };
    // event handler: 패스워드 변경 이벤트 처리
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPassword(value);
      setPasswordError(false);
      setPasswordErrorMessage("");
    };
    // event handler: 패스워드 확인 변경 이벤트 처리
    const onPasswordCheckChangeHandler = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const { value } = event.target;
      setPasswordCheck(value);
      setPasswordCheckError(false);
      setPasswordCheckErrorMessage("");
    };
    // event handler: 닉네임 변경 이벤트 처리
    const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setNickname(value);
      setNicknameError(false);
      setNicknameErrorMessage("");
    };

    //event handler: 패스워드 버튼 클릭 이벤트 처리
    const onPasswordButtonClickHandler = () => {
      if (passwordButtonIcon === "eye-light-off-icon") {
        setPasswordButtonIcon("eye-light-on-icon");
        setPasswordType("text");
      } else {
        setPasswordButtonIcon("eye-light-off-icon");
        setPasswordType("password");
      }
    };
    //event handler: 패스워드 확인 버튼 클릭 이벤트 처리
    const onPasswordCheckButtonClickHandler = () => {
      if (passwordCheckButtonIcon === "eye-light-off-icon") {
        setPasswordCheckButtonIcon("eye-light-on-icon");
        setPasswordCheckType("text");
      } else {
        setPasswordCheckButtonIcon("eye-light-off-icon");
        setPasswordCheckType("password");
      }
    };
    // event handler: 회원가입 버튼 클릭 이벤트 처리
    const onSignUpButtonClickHandler = () => {
      // alert("회원가입 버튼!");
      const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
      const isEmailPattern = emailPattern.test(email);
      if (!isEmailPattern) {
        setEmailError(true);
        setEmailErrorMessage("이메일 주소 포멧이 맞지 않습니다.");
      }
      const isCheckedPassword = password.trim().length >= 8;
      if (!isCheckedPassword) {
        setPasswordError(true);
        setPasswordErrorMessage("비밀번호는 8자 이상 입력해주세요");
      }
      const isEqualPassword = password === passwordCheck;
      if (!isEqualPassword) {
        setPasswordCheckError(true);
        setPasswordCheckErrorMessage("비밀번호가 일치하지 않습니다.");
      }

      const hasNickname = nickname.length !== 0;
      if (!hasNickname) {
        setNicknameError(true);
        setNicknameErrorMessage("닉네임을 입력해주세요.");
      }

      if (
        !isEmailPattern ||
        !isCheckedPassword ||
        !isEqualPassword ||
        !hasNickname
      ) {
        return;
      }
      const requestBody: SignUpRequestDto = {
        email,
        password,
        nickname,
      };
      signUpRequest(requestBody).then(signUpResponse);
    };

    //event handler: 로그인 링크 클릭 이벤트 처리
    const onSignInLinkClickHandler = () => {
      setView("sign-in");
    };

    //event handler: 이메일 키 다운 이벤트 처리
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter") return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    };
    //event handler: 비밀번호 키 다운 이벤트 처리
    const onPasswordKeyDownHandler = (
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key !== "Enter") return;
      if (!passwordCheckRef.current) return;
      passwordCheckRef.current.focus();
    };
    //event handler: 패스워드 확인 키 다운 이벤트 처리
    const onPasswordCheckKeyDownHandler = (
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key !== "Enter") return;
      if (!nicknameRef.current) return;
      nicknameRef.current.focus();
    };
    //event handler: 닉네임 키 다운 이벤트 처리
    const onNicknameKeyDownHandler = (
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key !== "Enter") return;
      onSignUpButtonClickHandler();
    };

    // render: sign up card rendering
    return (
      <div className="auth-card">
        <div className="auth-card-box">
          <div className="auth-card-top">
            <div className="auth-card-title-box">
              <div className="auth-card-title">{"회원가입"}</div>
            </div>
            <InputBox
              ref={emailRef}
              label="이메일 주소*"
              type="text"
              placeholder="이메일 주소를 입력해주세요."
              value={email}
              onChange={onEmailChangeHandler}
              error={isEmailError}
              message={emailErrorMessage}
              onKeyDown={onEmailKeyDownHandler}
            />
            <InputBox
              ref={passwordRef}
              label="비밀번호*"
              type={passwordType}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onPasswordChangeHandler}
              error={isPasswordError}
              message={passwordErrorMessage}
              icon={passwordButtonIcon}
              onButtonClick={onPasswordButtonClickHandler}
              onKeyDown={onPasswordKeyDownHandler}
            />
            <InputBox
              ref={passwordCheckRef}
              label="비밀번호 확인*"
              type={passwordCheckType}
              placeholder="비밀번호를 다시 입력해주세요"
              value={passwordCheck}
              onChange={onPasswordCheckChangeHandler}
              error={isPasswordCheckError}
              message={passwordCheckErrorMessage}
              icon={passwordCheckButtonIcon}
              onButtonClick={onPasswordCheckButtonClickHandler}
              onKeyDown={onPasswordCheckKeyDownHandler}
            />
            <InputBox
              ref={nicknameRef}
              label="닉네임*"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={onNicknameChangeHandler}
              error={isNicknameError}
              message={nicknameErrorMessage}
              onKeyDown={onNicknameKeyDownHandler}
            />
          </div>
          <div className="auth-card-bottom">
            <div
              className="black-large-full-button"
              onClick={onSignUpButtonClickHandler}
            >
              {"회원가입"}
            </div>
            <div className="auth-description-box">
              <div className="auth-description">
                {"이미 계정이 있으신가요? "}
                <span
                  className="auth-description-link"
                  onClick={onSignInLinkClickHandler}
                >
                  {"로그인"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // render: 인증 화면 컴포넌트 렌더링
  return (
    <div id="auth-wrapper">
      <div className="auth-container">

        {view === "sign-in" && <SignInCard />}
        {view === "sign-up" && <SignUpCard />}
      </div>
    </div>
  );
}
