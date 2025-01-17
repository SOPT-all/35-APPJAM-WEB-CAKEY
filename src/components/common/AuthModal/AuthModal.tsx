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
  const { goLoginPage } = useEasyNavigate();
  return (
    <div className={authModalContainer}>
      <h1 className={modalMessage}>{modalText}</h1>
      <div className={buttonSet}>
        <TextButton size={'small'} color={'gray'} onClick={onClose}>
          {closeButtonText}
        </TextButton>
        <TextButton size={'small'} color={'red'} onClick={goLoginPage}>
          {authActionButtonText}
        </TextButton>
      </div>
    </div>
  );
};

export default AuthModal;
