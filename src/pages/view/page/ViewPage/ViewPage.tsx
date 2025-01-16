import { useState } from 'react';

import { Modal } from '@components';
import { useModal } from '@hooks';
import { SelectStationModal } from '@pages/view/components';
import { KakaoMap } from '@pages/view/components';

const ViewPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentLocation, setCurrentLocation] = useState('전체');

  const handleCurrentLocationChange = (location: string) => {
    setCurrentLocation(location);
  };

  return (
    <div>
      <KakaoMap />
      <button onClick={openModal}>모달열기</button>
      {isModalOpen && (
        <Modal variant="center">
          <SelectStationModal
            currentLocation={currentLocation}
            onCurrentLocationChange={handleCurrentLocationChange}
            onClose={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ViewPage;
