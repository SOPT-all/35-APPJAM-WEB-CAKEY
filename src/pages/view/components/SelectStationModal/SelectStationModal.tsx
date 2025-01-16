import { useState } from 'react';

import { Header, TextButton } from '@components';

import {
  footerSection,
  h1Style,
  modalLayoutStyle,
  scrollSection,
  spanBox,
  textSection,
} from './SelectStationModal.css';
import LocationSelectButton from '../LocationSelectButton/LocationSelectButton';

interface SelectStationModalProps {
  stationKrNames: string[];
  currentLocation: string;
  onCurrentLocationChange: (location: string) => void;
  onClose: () => void;
}

const SelectStationModal = ({
  stationKrNames,
  currentLocation,
  onCurrentLocationChange,
  onClose,
}: SelectStationModalProps) => {
  const [selectedLocation, setSelectedLocation] = useState(currentLocation);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  const handleSelectButtonClick = () => {
    onCurrentLocationChange(selectedLocation);
    onClose();
  };

  return (
    <>
      <Header />
      <div className={modalLayoutStyle}>
        <section className={textSection}>
          <h1 className={h1Style}>지하철역을 선택해주세요</h1>
          <div className={spanBox}>
            <span>아직 등록되지 않은 지역이 있어요!</span>
            <span>현재 등록 지역 : 마포구</span>
          </div>
        </section>
        <section className={scrollSection}>
          {stationKrNames.map((station, index) => (
            <LocationSelectButton
              key={index}
              location={station}
              currentLocation={selectedLocation}
              onClick={() => handleLocationClick(station)}
            />
          ))}
        </section>
        <section className={footerSection}>
          <TextButton size="large" onClick={handleSelectButtonClick}>
            선택하기
          </TextButton>
        </section>
      </div>
    </>
  );
};

export default SelectStationModal;
