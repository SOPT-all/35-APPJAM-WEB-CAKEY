import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import {
  StoreDefault42,
  StoreDefault54,
  StoreLike42,
  StoreLike54,
} from '@constants';
import useMapLoader from '@pages/view/hooks/useMapLoader';

import { buttonSectionStyle, mapContainer } from './kakaoMap.css';
import MapGpsButton from '../MapGpsButton/MapGpsButton';
import MapSaveButton from '../MapSaveButton/MapSaveButton';

interface KakaoMapProps {
  currentLocation: string;
}

const allStationLocations = [
  {
    storeId: 1,
    latitude: 37.556621,
    longitutde: 126.923877,
  },
  {
    storeId: 2,
    latitude: 37.55223,
    longitutde: 126.92244,
  },
  {
    storeId: 3,
    latitude: 37.561056,
    longitutde: 126.922655,
  },
  {
    storeId: 4,
    latitude: 37.555134,
    longitutde: 126.936778,
  },
];

const markerIcon = {
  saveOff: {
    normal: StoreDefault42,
    clicked: StoreDefault54,
  },
  saveOn: {
    normal: StoreLike42,
    clicked: StoreLike54,
  },
};

const KakaoMap = ({ currentLocation }: KakaoMapProps) => {
  useMapLoader();

  const defaultCenter = { lat: 37.556621, lng: 126.923877 };
  // 찜 버튼 활성화 상태
  const [isSaveActive, setIsSaveActive] = useState(false);
  // gps 버튼 활성화 상태
  const [isGpsActive, setIsGpsActive] = useState(false);

  // 현재 사용자의 위치
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>(defaultCenter);

  // 지도의 중심 좌표
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>(defaultCenter);

  const handleSaveButtonClick = () => {
    setIsSaveActive((prev) => !prev);
  };

  // useEffect(() => {

  // }, [])
  return (
    <div className={mapContainer}>
      <Map
        center={defaultCenter}
        level={2}
        style={{ width: '100%', height: '100%' }}
      >
        {allStationLocations.map((location) => (
          <MapMarker
            key={location.storeId}
            position={{ lat: location.latitude, lng: location.longitutde }}
            image={{
              src: markerIcon.saveOff.clicked,
              size: { width: 54, height: 54 },
            }}
            onClick={() => {}}
          />
        ))}
      </Map>
      <section className={buttonSectionStyle}>
        <MapSaveButton
          isActive={isSaveActive}
          onToggle={handleSaveButtonClick}
        />
        <MapGpsButton isActive={isGpsActive} />
      </section>
    </div>
  );
};

export default KakaoMap;