// packages/react/src/MyButton.tsx
import React, { useState } from 'react';

export interface MyButtonProps {
  label?: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label = 'Click me', onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: clicked ? 'green' : 'blue',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 16px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
};

export default MyButton;
