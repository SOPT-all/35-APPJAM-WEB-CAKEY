import { ButtonHTMLAttributes } from 'react';

import { IcKakao } from '@svgs';

import { buttonStyle, iconStyle } from './SocialLoginButton.css';

export interface SocialLoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  platform: 'kakao';
}

const platformIcon = {
  kakao: <IcKakao />,
};

const SocialLoginButton = ({ platform, children }: SocialLoginButtonProps) => {
  return (
    <button
      className={buttonStyle({
        platform,
      })}
    >
      <span className={iconStyle}>{platformIcon[platform]}</span>
      {children}
    </button>
  );
};

export default SocialLoginButton;
