import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import {
  backdropStyle,
  modalStyle,
} from 'src/components/common/CenterModal/CenterModal.css';

const potalElement = document.getElementById('modal') as HTMLElement;

export interface CenterModalProps {
  backdropClick?: () => void;
}

const CenterModal = ({
  children,
  backdropClick,
}: PropsWithChildren<CenterModalProps>) => {
  return createPortal(
    <>
      <div className={backdropStyle} onClick={backdropClick} />
      <div className={modalStyle}>{children}</div>
    </>,
    potalElement
  );
};

export default CenterModal;