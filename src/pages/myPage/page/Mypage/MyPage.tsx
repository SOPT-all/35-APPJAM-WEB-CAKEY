import { useFetchUser } from '@apis/myPage';

import { AuthModal, Footer, Modal, TextButton } from '@components';
import { WHIPEE_CONTACT_FORM } from '@constants';
import { useEasyNavigate, useModal } from '@hooks';
import { LetsGoButton, ProfileCard } from '@pages/myPage/components';
import { isLoggedIn } from '@utils';

import {
  footerWrapper,
  letsGoButtonWrapper,
  loginButton,
  myPageLayout,
  profileCardStyle,
} from './MyPage.css';

const MyPage = () => {
  const isLogin = isLoggedIn();

  const { isModalOpen, openModal, closeModal } = useModal();

  const { goLikeListPage, goLoginPage } = useEasyNavigate();

  const handleContactForm = () => {
    window.open(WHIPEE_CONTACT_FORM, '_blank');
  };

  const { data: userData } = useFetchUser();

  return (
    <div className={myPageLayout}>
      <section className={profileCardStyle[isLogin ? 'login' : 'logout']}>
        <ProfileCard
          isLogin={isLogin}
          userName={userData.userName}
          userEmail={userData.userEmail}
        />
      </section>

      {isLogin ? (
        <div className={letsGoButtonWrapper}>
          <LetsGoButton text={'찜 목록'} onClick={goLikeListPage} />
          <LetsGoButton text={'휘피에 문의하기'} onClick={handleContactForm} />
          <LetsGoButton text={'로그아웃'} onClick={openModal} />
        </div>
      ) : (
        <div className={loginButton} onClick={goLoginPage}>
          <TextButton size={'large'} color={'red'}>
            로그인 하기
          </TextButton>
        </div>
      )}

      <div className={footerWrapper}>
        <Footer />
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
