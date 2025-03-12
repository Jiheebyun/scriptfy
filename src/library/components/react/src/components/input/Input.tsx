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
