import { ButtonHTMLAttributes } from 'react';
import {
  flexButtonStyle,
  iconStyle,
  platformStyle,
} from './SocialLoginButton.css';
import { IcKakao } from '@svgs';

export interface SocialLoginButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  platform: 'kakao';
}

// 플랫폼별 아이콘 매핑
const platformIcon: Record<string, JSX.Element> = {
  kakao: <IcKakao />,
};

const SocialLoginButton = ({ platform, children }: SocialLoginButtonProps) => {
  return (
    <button className={`${flexButtonStyle} ${platformStyle[platform]}`}>
      <span className={iconStyle}>{platformIcon[platform]}</span>
      {children}
    </button>
  );
};

export default SocialLoginButton;
