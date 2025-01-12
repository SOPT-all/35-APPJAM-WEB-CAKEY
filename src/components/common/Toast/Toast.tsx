import { createPortal } from 'react-dom';
import { toastStyle } from './Toast.css';

interface ToastProps {
  message: string;
}

const portalElement = document.getElementById('toast') as HTMLElement;

const Toast = ({ message }: ToastProps) => {
  return createPortal(
    <div className={toastStyle}>{message}</div>,
    portalElement
  );
};

export default Toast;
