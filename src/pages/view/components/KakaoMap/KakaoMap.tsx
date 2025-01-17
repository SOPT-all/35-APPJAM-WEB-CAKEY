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
import {
  ALLSTATIONLOCATIONS,
  HONGDAELOCATIONS,
  SAVEDLOCATIONS,
} from 'src/constants/stations';

import { buttonSectionStyle, mapContainer } from './kakaoMap.css';
import MapGpsButton from '../MapGpsButton/MapGpsButton';
import MapSaveButton from '../MapSaveButton/MapSaveButton';

import { CoordinateType, StationType } from '@types';

interface KakaoMapProps {
  currentLocation: StationType;
}

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
  const [storeMarkerList, setStoreMarkerList] = useState<CoordinateType[]>([]);
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

  const changedMarkerIcon = isSaveActive
    ? markerIcon.saveOn.normal
    : markerIcon.saveOff.normal;

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
    if (isSaveActive) {
      // 스토어 좌표 리스트 조회 (ALL) 결과 data 넣기
      setStoreMarkerList(ALLSTATIONLOCATIONS);
    } else {
      // 찜한 스토어 좌표 리스트 조회 결과 data 넣기
      setStoreMarkerList(SAVEDLOCATIONS);
    }
  };

  useEffect(() => {
    if (currentLocation) {
      setStoreMarkerList(HONGDAELOCATIONS);
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
    // 지금은 더미데이터 넣는 중
    setStoreMarkerList(ALLSTATIONLOCATIONS);
  }, []);

  console.log('렌더링 됨');
  return (
    <div className={mapContainer}>
      <Map
        center={center}
        level={4}
        style={{ width: '100%', height: '100%' }}
        onCenterChanged={handleCenterChanged}
      >
        {storeMarkerList.map((location) => (
          <MapMarker
            key={location.storeId}
            position={{ lat: location.latitude, lng: location.longitutde }}
            image={{
              src: changedMarkerIcon,
              size: { width: 42, height: 42 },
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
