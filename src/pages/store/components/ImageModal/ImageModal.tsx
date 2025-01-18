import { IcX } from '@svgs';

import { modalContainer, imageWrapper, closeButton } from './ImageModal.css';

interface ImageModalProps {
  imgUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imgUrl, onClose }: ImageModalProps) => {
  return (
    <div className={modalContainer}>
      <img src={imgUrl} className={imageWrapper} />
      <IcX width={30} height={30} className={closeButton} onClick={onClose} />
    </div>
  );
};

export default ImageModal;
