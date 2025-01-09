import React, { ButtonHTMLAttributes } from 'react';
import {
  flexButtonStyle,
  iconStyle,
  platformStyle,
} from './SocialLoginButton.css';

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
    <button className={`${flexButtonStyle} ${platformStyle[platform]}`}>
      <span className={iconStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default SocialLoginButton;
