import { useState } from 'react';

import { useFetchStoreDetailDesign } from '@apis/store';

import { Image, Modal } from '@components';

import { gridStyle } from './StoreDesign.css';
import ImageModal from '../ImageModal/ImageModal';

interface StoreDesignProps {
  storeId: number;
}

const StoreDesign = ({ storeId }: StoreDesignProps) => {
  const { data: designData } = useFetchStoreDetailDesign(storeId);

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
            <Image
              src={design.cakeImageUrl}
              hasIcon
              isActive={design.isLiked}
              itemId={design.cakeId}
            />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <Modal variant="bottom">
          <ImageModal imgUrl={selectedImage} onClose={closeImageModal} />
        </Modal>
      )}
    </>
  );
};

export default StoreDesign;
