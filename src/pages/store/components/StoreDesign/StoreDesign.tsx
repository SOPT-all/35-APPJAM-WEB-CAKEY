import { useState } from 'react';

import { Image, Modal } from '@components';

import { gridStyle } from './StoreDesign.css';
import ImageModal from '../ImageModal/ImageModal';

import { storeDetailDesign } from '@types';

interface StoreDesignProps {
  designData: storeDetailDesign[];
}

const StoreDesign = ({ designData }: StoreDesignProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ul className={gridStyle}>
        {designData.map((design) => (
          <li
            key={design.cakeId}
            onClick={() => handleImageClick(design.imageUrl)}
          >
            <Image src={design.imageUrl} hasIcon isActive={design.isLiked} />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <Modal variant="center">
          <ImageModal imgUrl={selectedImage} onClose={closeImageModal} />
        </Modal>
      )}
    </>
  );
};

export default StoreDesign;
