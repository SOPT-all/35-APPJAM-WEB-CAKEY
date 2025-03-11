import { useEffect, useState } from 'react';

import { Header, Input } from '@components';
import { vars } from '@styles/theme.css';

import {
  h1Style,
  inputSection,
  modalLayoutStyle,
  noResultSection,
  noResultSubTextStyle,
  noResultTextStyle,
  scrollSection,
  spanStyle,
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
  const [searchedStation, setSearchedStation] = useState('');
  const [debouncedStation, setDebouncedStation] = useState(searchedStation);
  const [selectedLocation, setSelectedLocation] = useState(currentLocation);

  const handleChangeStationInput = (
    value: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof value === 'string') {
      setSearchedStation(value);
    } else {
      setSearchedStation(value.target.value);
    }
    console.log(filteredStation);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedStation(searchedStation), 500);
    return () => clearTimeout(timeout);
  }, [searchedStation]);

  const filteredStation = stationKrNames.filter((stations) =>
    stations.includes(debouncedStation)
  );

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    onCurrentLocationChange(location);
    onClose();
  };

  // const handleSelectButtonClick = () => {
  //   onCurrentLocationChange(selectedLocation);
  //   onClose();
  // };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text; // 검색어가 없으면 원래 텍스트 반환

    const parts = text.split(new RegExp(`(${query})`, 'gi')); // 검색어 기준으로 분할
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ color: vars.colors.red1 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Header />
      <div className={modalLayoutStyle}>
        <section className={textSection}>
          <h1 className={h1Style}>지하철역을 선택해주세요</h1>
          <span className={spanStyle}>아직 등록되지 않은 지역이 있어요!</span>
        </section>
        <section className={inputSection}>
          <Input.InputField
            value={searchedStation}
            onChange={handleChangeStationInput}
            placeholder="지하철 역을 검색해보세요"
            variant="station"
            hasIcon
          />
        </section>
        {searchedStation === '' ? (
          <section className={scrollSection}>
            {stationKrNames.map((station, index) => (
              <LocationSelectButton
                key={index}
                location={station}
                currentLocation={selectedLocation}
                onClick={() => handleLocationClick(station)}
                hasLabel={station === '전체' ? true : false}
              />
            ))}
          </section>
        ) : (
          <section className={scrollSection}>
            {filteredStation?.length ? (
              filteredStation.map((station, index) => (
                <LocationSelectButton
                  key={index}
                  location={highlightMatch(station, debouncedStation)}
                  currentLocation={selectedLocation}
                  onClick={() => handleLocationClick(station)}
                  hasLabel={station === '전체' ? true : false}
                />
              ))
            ) : (
              <div className={noResultSection}>
                <span className={noResultTextStyle}>검색 결과가 없어요</span>
                <span className={noResultSubTextStyle}>
                  다른 검색어를 입력해 보세요
                </span>
              </div>
            )}
          </section>
        )}

        {/* <section className={footerSection}>
          <TextButton size="xLarge" onClick={handleSelectButtonClick}>
            선택하기
          </TextButton>
        </section> */}
      </div>
    </>
  );
};

export default SelectStationModal;
