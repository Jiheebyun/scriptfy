// Button.jsx
import React from "react";
import "./button.scss";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "", ...props }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
