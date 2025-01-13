import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyle, modalStyle } from './BottomModal.css';

export interface BottomModalProps {
  hasBackdrop?: boolean;
  backdropClick?: () => void;
}

const potalElement = document.getElementById('modal') as HTMLElement;

const BottomModal = ({
  hasBackdrop = false,
  backdropClick,
  children,
}: PropsWithChildren<BottomModalProps>) => {
  return createPortal(
    <>
      {hasBackdrop && <div className={backdropStyle} onClick={backdropClick} />}
      <div className={modalStyle}>{children}</div>
    </>,
    potalElement
  );
};

export default BottomModal;
