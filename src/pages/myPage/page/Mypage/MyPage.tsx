import { AuthModal, Modal, TextButton } from '@components';
import { useEasyNavigate, useModal } from '@hooks';
import { LetsGoButton, ProfileCard } from '@pages/myPage/components';

import {
  letsGoButtonWrapper,
  loginButton,
  profileCardStyle,
} from './MyPage.css';

const user = {
  userId: 1,
  userName: '쥬먐이',
  userEmail: 'jiyoo0315@naver.com',
};

const MyPage = () => {
  const isLogin = true; //추후 삭제 후 localStorage.getItem로 수정할 예정

  const { isModalOpen, openModal, closeModal } = useModal();

  const { goMyList, goLoginPage } = useEasyNavigate();

  const handleButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/1yB7kSUqh2scItQQ-GKqfNHrMfMX-yLn6g4ib7EGmd1c/edit',
      '_blank'
    );
  };

  return (
    <>
      <section className={profileCardStyle[isLogin ? 'login' : 'logout']}>
        <ProfileCard
          isLogin={isLogin}
          userName={user.userName}
          userEmail={user.userEmail}
        />
      </section>

      {isLogin ? (
        <div className={letsGoButtonWrapper}>
          <LetsGoButton text={'찜 목록'} onClick={goMyList} />
          <LetsGoButton text={'휘피에 문의하기'} onClick={handleButtonClick} />
          <LetsGoButton text={'로그아웃'} onClick={openModal} />
        </div>
      ) : (
        <div className={loginButton} onClick={goLoginPage}>
          <TextButton size={'large'} color={'red'}>
            로그인 하기
          </TextButton>
        </div>
      )}

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
    </>
  );
};

export default MyPage;
