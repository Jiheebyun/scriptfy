// Button.jsx
import React from "react";
import "./button.scss";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  href?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;  // 사용자 스타일
}

const SfButton: React.FC<ButtonProps> = (
    {   
        label, 
        onClick, 
        href = "", 
        className = "",
        color = "#1976d2",
        style= {},
        ...props 
    }) => {

    const finalStyle: React.CSSProperties = {
        ...style,
        backgroundColor: style.backgroundColor ?? color,
    };

    return (
        <button
            className = {`custom-button ${className}`}
            onClick = {onClick}
            style = {finalStyle} 
            {...props} 
        >
            { href.length > 0 
              ? <a href={href} target="_blank">{label}</a> 
              : label
            }
        </button>
    );
};

export default SfButton;


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

    color:(String) - 컬러 속성은 버튼의 컬러만 바로 바꿀수 있다.
        ex: <Button color="blue" />

    style:(object) - 버튼의 상세 스타일을 지정할수 있다. color와 style에 background color를 두개의 속성이 지정되면 style의 스타일을 우선으로 적용한다
        ex: <Button style={{backgroundColor:gray}} color: "blue"> **style 우선 적용**
*/