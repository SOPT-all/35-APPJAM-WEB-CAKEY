import { SocialLoginButton } from '@components';
import { IcKakao } from '@svgs';

const LoginPage = () => {
  return (
    <SocialLoginButton platform="kakao" icon={<IcKakao />}>
      카카오로 시작하기
    </SocialLoginButton>
  );
};

export default LoginPage;
