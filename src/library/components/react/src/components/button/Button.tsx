// Button.jsx
import React from "react";
import "./button.scss";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  href?: string;
  color: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = (
    {   
        label, 
        onClick, 
        href="", 
        className = "",
        color,
        ...props 
    }) => {


    return (
        <button
            className={`custom-button ${className}`}
            onClick={onClick}
            {...props}
        >
            { href.length > 0 
              ? <a href={href} target="_blank">{label}</a> 
              : label
            }
        </button>
    );
};

export default Button;


/*
Parameters
    label:(String) - 버튼에 원하는 텍스트를 넣을수 있다. 
        ex: <Button label="Submit" />
    className:(String) - 클래스 속성을 지정 할 수 있다
        ex: <Button className="isActive" />
    onClick:(Function) - 클릭이벤트의 콜백 함수가 실핼된다.
        ex: <Button onClick={btnHandler} />
    href:(String) - 해당 링크가 새창에서 띄워진다.
        ex: <Button href="www.google.com" /> 

*/