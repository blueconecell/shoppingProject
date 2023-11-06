import { forwardRef } from "react";
import "./style.css";

interface Props {}

const InputBox = forwardRef<HTMLInputElement, Prop>((props: Props, ref) => {
  return (
    <div className="inputbox">
      <div className="inputbox-label">{"아이디"}</div>
      <div className="inputbox-container">
        <input className="input" />
      </div>
      <div className="inputbox-message">
        {"비밀번호는 8자 이상 입력해주세요."}
      </div>
    </div>
  );
});
