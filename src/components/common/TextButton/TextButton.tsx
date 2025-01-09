import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from 'src/components/common/TextButton/TextButton.css';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  color?: 'blue' | 'gray' | 'stroke';
  disabled?: boolean;
}

const TextButton = ({
  size,
  color = 'blue',
  disabled = false,
  onClick,
  children,
}: TextButtonProps) => {
  return (
    <div>
      <button
        className={buttonStyle({
          size: size,
          color: color,
        })}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default TextButton;
