import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;         // 버튼에 표시될 텍스트
  onClick: () => void;   // 버튼 클릭 이벤트 핸들러
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;