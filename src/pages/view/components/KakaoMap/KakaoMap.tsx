import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import {
  StoreDefault42,
  StoreDefault54,
  StoreLike42,
  StoreLike54,
  MyLocation,
} from '@constants';
import { useDebounce, useMapLoader } from '@pages/view/hooks';

import { buttonSectionStyle, mapContainer } from './kakaoMap.css';
import MapGpsButton from '../MapGpsButton/MapGpsButton';
import MapSaveButton from '../MapSaveButton/MapSaveButton';

import { StationType } from '@types';

interface KakaoMapProps {
  currentLocation: StationType;
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

  // useDebounce 훅 사용
  const { debouncedFunction: handleDebouncedCenterChange } = useDebounce(
    (map: kakao.maps.Map) => {
      const lat = map.getCenter().getLat();
      const lng = map.getCenter().getLng();
      setCenter({ lat, lng });
    },
    500
  );

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

  const fetchCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newCenter = { lat: latitude, lng: longitude };
          setCurrentPosition(newCenter);
          setCenter(newCenter);
          setIsGpsActive(true);
        },
        (error) => {
          console.error('Error getting user location:', error);
          setCurrentPosition(defaultCenter);
          setCenter(defaultCenter);
          setIsGpsActive(false);
        }
      );
    }
  };

  const handleCenterChanged = (map: kakao.maps.Map) => {
    setIsGpsActive(false);

    handleDebouncedCenterChange(map);
  };
  const handleGpsButtonClick = () => {
    fetchCurrentPosition();
  };
  const handleSaveButtonClick = () => {
    setIsSaveActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentLocation) {
      setCenter({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      });
    }
    // currentLocation 바뀌면 해당 지하철역으로 스토어 좌표 조회 해서 마커 띄워야함
  }, [currentLocation]);

  useEffect(() => {
    fetchCurrentPosition();
    // 첫 렌더링 시 전체 스토어 좌표 조회 해서 마커 띄워야함
  }, []);

  console.log('렌더링 됨');
  return (
    <div className={mapContainer}>
      <Map
        center={center}
        level={2}
        style={{ width: '100%', height: '100%' }}
        onCenterChanged={handleCenterChanged}
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
