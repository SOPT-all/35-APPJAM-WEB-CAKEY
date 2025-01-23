import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyle, modalStyle } from './Modal.css';

export interface ModalProps {
  variant: 'center' | 'bottom';
  hasBackdrop?: boolean;
  backdropClick?: () => void;
}

const potalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({
  variant,
  hasBackdrop = false,
  backdropClick,
  children,
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      {hasBackdrop && (
        <div className={backdropStyle({ variant })} onClick={backdropClick} />
      )}
      <div className={modalStyle({ variant })}>{children}</div>
    </>,
    potalElement
  );
};

export default Modal;
