import { useState } from 'react';

import { TextButton } from '@components';
import { LetsGoButton, ProfileCard } from '@pages/myPage/components';

import { letsGoButtonStyle, loginButton, profileCardStyle } from './MyPage.css';

const MyPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className={profileCardStyle[isLogin ? 'login' : 'logout']}>
        <ProfileCard isLogin={isLogin} />
      </div>
      <div>
        {isLogin ? (
          <div className={letsGoButtonStyle}>
            <LetsGoButton text={'찜 목록'} />
            <LetsGoButton text={'케이키에 문의하기'} />
            <LetsGoButton text={'로그아웃'} />
          </div>
        ) : (
          <div className={loginButton}>
            <TextButton size={'large'} color={'red'} onClick={() => setIsLogin}>
              로그인 하기
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
