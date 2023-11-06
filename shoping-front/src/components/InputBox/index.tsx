import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  forwardRef,
} from "react";
import "./style.css";

//          interface: Properties          //
interface Props {
  label: string;
  type: "text" | "password";
  placeholder: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  error: boolean;

  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

//          component: Input Box 컴포넌트          //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  //          state: properties          //
  const { label, type, placeholder, value, error } = props;
  const { setValue, onKeyDown } = props;

  //          event handler: input 값 변경 이벤트 처리 함수          //
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  //          event handler: input 키 이벤트 처리 함수          //
  const onKeyDownHanlder = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyDown) return;
    onKeyDown(event);
  };

  //          render: Input Box 렌더링          //
  return (
    <div className="inputbox">
      <div className="inputbox-label">{label}</div>
      <div
        className={error ? "inputbox-container-error" : "inputbox-container"}
      >
        <input
          ref={ref}
          type={type}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHanlder}
        />
      </div>
      <div className="inputbox-message">
        {"비밀번호는 8자 이상 입력해주세요."}
      </div>
    </div>
  );
});
