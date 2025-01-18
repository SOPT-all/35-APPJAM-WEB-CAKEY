import { useEffect, useState } from 'react';

import { BottomSheet, Modal } from '@components';
import { useModal } from '@hooks';
import { LocationButton, SelectStationModal } from '@pages/view/components';
import { KakaoMap } from '@pages/view/components';
import { STATIONS } from 'src/constants/stations';

import { StationType } from '@types';

const ViewPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [stations, setStations] = useState<StationType[]>(STATIONS);
  const [selectedStoreId, setSelectedStoreId] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState({
    stationEnName: 'ALL',
    stationKrName: '전체',
    latitude: 0.0,
    longitude: 0.0,
  });

  const stationKrNames = stations.map((station) => station.stationKrName);

  const handleCurrentLocationChange = (stationName: string) => {
    const selectedStation = stations.find(
      (station) => station.stationKrName === stationName
    );

    if (selectedStation) {
      setCurrentLocation(selectedStation);
    } else {
      console.error(`Station "${stationName}" not found`);
    }
  };

  const handleMarkerClick = (storeId: number) => {
    setSelectedStoreId(storeId);
  };

  useEffect(() => {
    // 전체 지하철역 조회 api get
  }, []);

  console.log(selectedStoreId);
  return (
    <div>
      <LocationButton
        currentLocation={currentLocation.stationKrName}
        onClick={openModal}
      />
      <KakaoMap
        currentLocation={currentLocation}
        onMarkerClick={handleMarkerClick}
      />
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
      {selectedStoreId === 0 ? (
        <BottomSheet>1</BottomSheet>
      ) : (
        <Modal variant="bottom">1</Modal>
      )}
    </div>
  );
};

export default ViewPage;
