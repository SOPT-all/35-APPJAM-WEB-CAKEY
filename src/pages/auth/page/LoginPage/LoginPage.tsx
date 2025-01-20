import { useEffect } from 'react';

import { SocialLoginButton } from '@components';
import { LoginPageImage } from '@constants';
import { useEasyNavigate } from '@hooks';
import { isLoggedIn } from '@utils';

import { ImgLogo } from '@svgs';

import {
  imageButtonContainer,
  loginButtonWrapper,
  loginMainImage,
  loginPageStlye,
  noLoginButton,
  titleText,
  titleWrapper,
} from './LoginPage.css';

const LoginPage = () => {
  const { goHomePage } = useEasyNavigate();
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

  const handleLoginClick = () => {
    window.location.replace(kakaoLoginUrl);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      goHomePage();
    }
  }, [goHomePage]);
  return (
    <div className={loginPageStlye}>
      <div className={titleWrapper}>
        <ImgLogo width={152} />
        <div className={titleText}>
          <h1>원하는 주문 제작 케이크를</h1>
          <h1>누구보다 쉽고, 빠르게!</h1>
        </div>
      </div>
      <div className={imageButtonContainer}>
        <img src={LoginPageImage} className={loginMainImage} />
        <div className={loginButtonWrapper}>
          <SocialLoginButton platform="kakao" onClick={handleLoginClick}>
            카카오로 시작하기
          </SocialLoginButton>
          <u className={noLoginButton}>로그인 없이 둘러보기</u>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
