import { startTransition, useState } from 'react';

import { useFetchStations } from '@apis/view';

import { Modal } from '@components';
import { useModal } from '@hooks';
import { LocationButton, SelectStationModal } from '@pages/view/components';
import { KakaoMap } from '@pages/view/components';

import { locationButtonWrapper } from './ViewPage.css';

const ViewPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data: stations } = useFetchStations();

  const [currentLocation, setCurrentLocation] = useState({
    stationEnName: 'ALL',
    stationKrName: '전체',
    latitude: 0.0,
    longitude: 0.0,
  });
  console.log(stations);
  console.log('currentLocation', currentLocation);
  const stationKrNames = (stations || []).map(
    (station) => station.stationKrName
  );

  const handleCurrentLocationChange = (stationName: string) => {
    const selectedStation = (stations || []).find(
      (station) => station.stationKrName === stationName
    );

    if (selectedStation) {
      startTransition(() => {
        setCurrentLocation(selectedStation);
      });
    } else {
      console.error(`Station "${stationName}" not found`);
    }
  };

  return (
    <div>
      <div className={locationButtonWrapper}>
        <LocationButton
          currentLocation={currentLocation.stationKrName}
          onClick={openModal}
        />
      </div>
      <KakaoMap currentLocation={currentLocation} />
      {isModalOpen && (
        <Modal variant="center">
          <SelectStationModal
            stationKrNames={stationKrNames}
            currentLocation={currentLocation.stationKrName}
            onCurrentLocationChange={handleCurrentLocationChange}
            onClose={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ViewPage;
