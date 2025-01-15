import { Modal } from '@components';
import { useModal } from '@hooks';
import { SelectStationModal } from '@pages/view/components';
import { useState } from 'react';

const ViewPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentLocation, setCurrentLocation] = useState('전체');

  const handleCurrentLocationChange = (location: string) => {
    setCurrentLocation(location);
  };

  console.log(currentLocation);
  return (
    <div>
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
