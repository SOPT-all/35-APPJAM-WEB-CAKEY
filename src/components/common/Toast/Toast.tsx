import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

import { IcLineLikeOn20, IcSavedOn24, IcToastCheck, IcToastError } from '@svgs';

import { toastButtonStyle, toastMessageStyle, toastStyle } from './Toast.css';

import { ToastState } from '@types';

const toastVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transform: 'translate(-50%, 50px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    transform: 'translate(-50%, 0)',
  },
  exit: {
    opacity: 0,
    y: 50,
    transform: 'translate(-50%, 50px)',
  },
};

const toastIcon = {
  like: <IcLineLikeOn20 width={20} height={20} />,
  save: <IcSavedOn24 width={20} height={20} />,
  error: <IcToastError width={20} height={20} />,
  check: <IcToastCheck width={20} height={20} />,
};

const portalElement = document.getElementById('toast') as HTMLElement;

const Toast = ({ icon, message, isButton = false }: ToastState) => {
  return createPortal(
    <motion.dialog
      className={toastStyle({ isButton })}
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.15 }}
    >
      <div className={toastMessageStyle}>
        {toastIcon[icon]}
        <span>{message}</span>
      </div>
      {isButton && (
        <button
          className={toastButtonStyle}
          onClick={() => (window.location.href = '/mypage/like-list')}
        >
          보러가기
        </button>
      )}
    </motion.dialog>,
    portalElement
  );
};

export default Toast;
