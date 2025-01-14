import { createPortal } from 'react-dom';
import { toastButtonStyle, toastMessageStyle, toastStyle } from './Toast.css';
import { IcLineLikeOn20, IcSavedOn24, IcToastCheck, IcToastError } from '@svgs';
import { ToastState } from '@types';

const toastIcon = {
  like: <IcLineLikeOn20 width={20} height={20} />,
  save: <IcSavedOn24 width={20} height={20} />,
  error: <IcToastError width={20} height={20} />,
  check: <IcToastCheck width={20} height={20} />,
};

const portalElement = document.getElementById('toast') as HTMLElement;

const Toast = ({ icon, message, isButton = false }: ToastState) => {
  return createPortal(
    <dialog className={toastStyle({ isButton })}>
      <div className={toastMessageStyle}>
        {toastIcon[icon]}
        <span>{message}</span>
      </div>
      {isButton && <button className={toastButtonStyle}>보러가기</button>}
    </dialog>,
    portalElement
  );
};

export default Toast;
