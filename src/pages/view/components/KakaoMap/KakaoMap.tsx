import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Modal } from '@components';
import { MyLocation } from '@constants';
import { useBottomSheet } from '@hooks';
import { useMapLoader } from '@pages/view/hooks';
import { useKakaoMap } from '@pages/view/hooks/useKakaoMap';
import { getMarkerIcon } from '@utils';

import {
  IcGpsmarkerOff,
  IcGpsmarkerOn,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonSectionStyle, mapContainer, mapStyle } from './kakaoMap.css';
import MapBottomSheet from '../MapBottomSheet/MapBottomSheet';
import MapButton from '../MapButton/MapButton';
import SelectedStoreModal from '../SelectedStoreModal/SelectedStoreModal';

import { StationType } from '@types';

interface KakaoMapProps {
  currentLocation: StationType;
}

const KakaoMap = ({ currentLocation }: KakaoMapProps) => {
  useMapLoader();
  const { animateState, handleAnimateChange } = useBottomSheet();
  const {
    selectedStoreId,
    storeMarkerList,
    currentPosition,
    center,
    isSaveActive,
    isGpsActive,
    handleCenterChanged,
    handleGpsButtonClick,
    handleSaveButtonClick,
    handleMarkerClick,
    handleMapClick,
  } = useKakaoMap(currentLocation, animateState, handleAnimateChange);

  return (
    <>
      <div className={mapContainer}>
        <Map
          center={center}
          level={4}
          className={mapStyle({ animateState })}
          onCenterChanged={handleCenterChanged}
          onClick={handleMapClick}
        >
          {storeMarkerList.map((location) => {
            const { src, size } = getMarkerIcon(location, isSaveActive);

            return (
              <MapMarker
                key={location.storeId}
                position={{ lat: location.latitude, lng: location.longitude }}
                image={{
                  src,
                  size,
                }}
                onClick={() => handleMarkerClick(location.storeId)}
              />
            );
          })}
          <MapMarker
            image={{
              src: MyLocation,
              size: { width: 32, height: 32 },
            }}
            position={currentPosition}
          />
        </Map>
        <section className={buttonSectionStyle}>
          <MapButton
            isActive={isSaveActive}
            onClick={handleSaveButtonClick}
            activeIcon={<IcSavedOn24 width={24} height={24} />}
            inactiveIcon={<IcSavedOff24 width={24} height={24} />}
          />
          <MapButton
            isActive={isGpsActive}
            onClick={handleGpsButtonClick}
            activeIcon={<IcGpsmarkerOn width={24} height={24} />}
            inactiveIcon={<IcGpsmarkerOff width={24} height={24} />}
          />
        </section>
      </div>
      {selectedStoreId === 0 ? (
        <MapBottomSheet
          selectedStation={currentLocation.stationEnName}
          isSaveActive={isSaveActive}
          animateState={animateState}
          handleAnimateChange={handleAnimateChange}
        />
      ) : (
        <Modal variant="bottom">
          <SelectedStoreModal storeId={1} />
        </Modal>
      )}
    </>
  );
};

export default KakaoMap;
