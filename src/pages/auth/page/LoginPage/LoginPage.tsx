import { SocialLoginButton } from '@components';
import { LoginPageImage } from '@constants';

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
          <SocialLoginButton platform="kakao">
            카카오로 시작하기
          </SocialLoginButton>
          <u className={noLoginButton}>로그인 없이 둘러보기</u>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
