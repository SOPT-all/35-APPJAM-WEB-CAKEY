import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import {
  backdropStyle,
  modalStyle,
} from 'src/components/common/CenterModal/CenterModal.css';

const potalElement = document.getElementById('modal') as HTMLElement;

const CenterModal = ({ children }: PropsWithChildren) => {
  return createPortal(
    <>
      <div className={backdropStyle} />
      <div className={modalStyle}>{children}</div>
    </>,
    potalElement
  );
};

export default CenterModal;
