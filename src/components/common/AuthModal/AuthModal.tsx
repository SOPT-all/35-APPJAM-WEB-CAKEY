import React from 'react';

import { useDeleteLogout } from '@apis/auth';

import { useEasyNavigate } from '@hooks';

import { authModalContainer, buttonSet, modalMessage } from './AuthModal.css';
import TextButton from '../TextButton/TextButton';

interface AuthModalProps {
  modalText: string;
  closeButtonText: string;
  authActionButtonText: string;
  onClose: () => void;
}

const AuthModal = ({
  modalText,
  closeButtonText,
  authActionButtonText,
  onClose,
}: AuthModalProps) => {
  const { mutate: logout } = useDeleteLogout();
  const { goLoginPage } = useEasyNavigate();

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };
  const handleActionButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (authActionButtonText === '로그아웃') {
      logout();
    } else {
      goLoginPage();
    }
  };
  return (
    <div className={authModalContainer}>
      <h1 className={modalMessage}>{modalText}</h1>
      <div className={buttonSet}>
        <TextButton size={'small'} color={'gray'} onClick={handleCloseClick}>
          {closeButtonText}
        </TextButton>
        <TextButton
          size={'small'}
          color={'red'}
          onClick={handleActionButtonClick}
        >
          {authActionButtonText}
        </TextButton>
      </div>
    </div>
  );
};

export default AuthModal;
