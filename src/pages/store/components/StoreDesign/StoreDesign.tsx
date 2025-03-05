import { useEffect, useRef, useState } from 'react';

import { useFetchStoreDetailDesign } from '@apis/store';

import { Image, Modal } from '@components';

import { gridStyle, liStyle, dimmedStyle } from './StoreDesign.css';
import ImageModal from '../ImageModal/ImageModal';

interface StoreDesignProps {
  storeId: number;
  recentCakeId?: number;
}

const StoreDesign = ({ storeId, recentCakeId }: StoreDesignProps) => {
  const { data: designData } = useFetchStoreDetailDesign(storeId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const recentCakeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (recentCakeId && recentCakeRef.current) {
      const scrollToCake = () => {
        recentCakeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      };

      requestAnimationFrame(scrollToCake);
    }
  }, [recentCakeId]);

  return (
    <>
      <ul className={gridStyle}>
        {designData.map((design) => (
          <li
            key={design.cakeId}
            onClick={() => handleImageClick(design.imageUrl)}
            className={liStyle}
          >
            <Image
              src={design.imageUrl}
              hasIcon
              isActive={design.isLiked}
              itemId={design.cakeId}
            />
            {recentCakeId === design.cakeId && (
              <div ref={recentCakeRef} className={dimmedStyle}>
                방금 본 케이크
              </div>
            )}
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
