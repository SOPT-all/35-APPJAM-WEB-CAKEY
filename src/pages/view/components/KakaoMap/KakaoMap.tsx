import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { MyLocation } from '@constants';
import { useMapLoader } from '@pages/view/hooks';
import { useKakaoMap } from '@pages/view/hooks/useKakaoMap';
import { getMarkerIcon } from '@utils';

import { buttonSectionStyle, mapContainer } from './kakaoMap.css';
import MapGpsButton from '../MapGpsButton/MapGpsButton';
import MapSaveButton from '../MapSaveButton/MapSaveButton';

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
        <MapSaveButton
          isActive={isSaveActive}
          onToggle={handleSaveButtonClick}
        />
        <MapGpsButton isActive={isGpsActive} onClick={handleGpsButtonClick} />
      </section>
    </div>
  );
};

export default KakaoMap;
