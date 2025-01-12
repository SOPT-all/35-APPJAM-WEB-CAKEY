import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from 'src/components/common/TextButton/TextButton.css';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  color?: 'red' | 'gray' | 'stroke';
  // isDisabled?: boolean;
}

const TextButton = ({
  size,
  color = 'red',
  // isDisabled = false,
  onClick,
  children,
}: TextButtonProps) => {
  return (
    <div>
      <button
        className={buttonStyle({
          size,
          color,
          // isDisabled,
        })}
        onClick={onClick}
        // disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
};

export default TextButton;
