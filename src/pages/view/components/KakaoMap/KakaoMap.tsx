import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { MyLocation } from '@constants';
import { useMapLoader } from '@pages/view/hooks';
import { useKakaoMap } from '@pages/view/hooks/useKakaoMap';
import { getMarkerIcon } from '@utils';

import {
  IcGpsmarkerOff,
  IcGpsmarkerOn,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonSectionStyle, mapContainer } from './kakaoMap.css';
import MapButton from '../MapButton/MapButton';

import { StationType } from '@types';

interface KakaoMapProps {
  currentLocation: StationType;
  onMarkerClick: (storeId: number) => void;
}

const KakaoMap = ({ currentLocation, onMarkerClick }: KakaoMapProps) => {
  useMapLoader();
  const {
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
  } = useKakaoMap(currentLocation, onMarkerClick);

  return (
    <div className={mapContainer}>
      <Map
        center={center}
        level={4}
        style={{ width: '100%', height: '100%' }}
        onCenterChanged={handleCenterChanged}
        onClick={handleMapClick}
      >
        {storeMarkerList.map((location) => {
          const { src, size } = getMarkerIcon(location, isSaveActive);

          return (
            <MapMarker
              key={location.storeId}
              position={{ lat: location.latitude, lng: location.longitutde }}
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
  );
};

export default KakaoMap;
