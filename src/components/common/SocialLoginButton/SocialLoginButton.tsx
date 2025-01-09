import React, { ButtonHTMLAttributes } from 'react';
import { flexButtonStyle, iconStyle } from './SocialLoginButton.css';

export interface SocialLoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  platform: 'kakao';
  icon?: React.ReactNode;
}

const SocialLoginButton = ({
  platform,
  icon,
  children,
}: SocialLoginButtonProps) => {
  return (
    <button className={flexButtonStyle}>
      <span className={iconStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default SocialLoginButton;
