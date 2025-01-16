import { useState } from 'react';

import { Modal } from '@components';
import { useModal } from '@hooks';
import { LocationButton, SelectStationModal } from '@pages/view/components';
import { KakaoMap } from '@pages/view/components';

const ViewPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentLocation, setCurrentLocation] = useState('전체');

  const handleCurrentLocationChange = (location: string) => {
    setCurrentLocation(location);
  };
  return (
    <div>
      <LocationButton currentLocation={currentLocation} onClick={openModal} />
      <KakaoMap currentLocation={currentLocation} />
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
