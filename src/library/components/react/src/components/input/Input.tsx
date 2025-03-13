import React from "react";
import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  iconClassName?: string;
  search?: boolean;
  searchData?: any[];
}

const SfInput: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  search,
  searchData,
  iconClassName = 'bx bxs-user', // 아이콘을 제공할수 있게 만드면 어떨까
  ...rest // 나머지 input 속성들 (value, onChange, disabled 등)
}) => {

    // Search가 true일때, searchData를 읽어서, 
    // 사용자가 타이핑을 하면 데이터에 해당하는 단어를 하위에 보여주는 기능 추가


    

  return (
    <div className="input-group">
      <i className={iconClassName}></i>
      <input 
        type={type} 
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default SfInput;
