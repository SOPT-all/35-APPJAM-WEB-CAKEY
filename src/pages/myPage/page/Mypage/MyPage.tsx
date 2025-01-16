import { useState } from 'react';

import { AuthModal, Modal, TextButton } from '@components';
import { useModal } from '@hooks';
import { LetsGoButton, ProfileCard } from '@pages/myPage/components';

import { letsGoButtonStyle, loginButton, profileCardStyle } from './MyPage.css';

const user = {
  userId: 1,
  userName: '쥬먐이',
  userEmail: 'jiyoo0315@naver.com',
};

const MyPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className={profileCardStyle[isLogin ? 'login' : 'logout']}>
        <ProfileCard
          isLogin={isLogin}
          userName={user.userName}
          userEmail={user.userEmail}
        />
      </div>
      <div>
        {isLogin ? (
          <div className={letsGoButtonStyle}>
            <LetsGoButton text={'찜 목록'} />
            <LetsGoButton text={'휘피에 문의하기'} />
            <LetsGoButton text={'로그아웃'} onClick={openModal} />
          </div>
        ) : (
          <div className={loginButton}>
            <TextButton size={'large'} color={'red'} onClick={() => setIsLogin}>
              로그인 하기
            </TextButton>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal variant={'center'} hasBackdrop backdropClick={closeModal}>
          <AuthModal
            modalText="로그아웃 하시겠습니까?"
            closeButtonText="취소"
            authActionButtonText="로그아웃"
            onClose={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default MyPage;
