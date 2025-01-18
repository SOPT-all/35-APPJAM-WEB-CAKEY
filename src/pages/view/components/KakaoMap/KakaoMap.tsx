import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import {
  StoreDefault32,
  StoreDefault54,
  StoreLike32,
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
  onMarkerClick: (storeId: number) => void;
}

const markerIcon = {
  saveOff: {
    normal: StoreDefault32,
    clicked: StoreLike54,
  },
  saveOn: {
    normal: StoreLike32,
    clicked: StoreDefault54,
  },
};

const KakaoMap = ({ currentLocation, onMarkerClick }: KakaoMapProps) => {
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
  const [storeMarkerList, setStoreMarkerList] = useState<
    (CoordinateType & { clicked: boolean })[]
  >([]);
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
    setStoreMarkerList(
      (isSaveActive ? ALLSTATIONLOCATIONS : SAVEDLOCATIONS).map((location) => ({
        ...location,
        clicked: false,
      }))
    );
  };

  const getMarkerIcon = (marker: { clicked: boolean }) => {
    const icons = isSaveActive ? markerIcon.saveOn : markerIcon.saveOff;
    const iconSrc = marker.clicked ? icons.clicked : icons.normal;

    const size =
      iconSrc === StoreDefault32 || iconSrc === StoreLike32
        ? { width: 32, height: 32 }
        : { width: 54, height: 54 };

    return { src: iconSrc, size };
  };

  const handleMarkerClick = (storeId: number) => {
    setStoreMarkerList((prev) =>
      prev.map((marker) =>
        marker.storeId === storeId
          ? { ...marker, clicked: true }
          : { ...marker, clicked: false }
      )
    );
    onMarkerClick(storeId);
  };

  const handleMapClick = () => {
    // 지도 빈 공간 클릭 시 모든 마커의 clicked 상태를 초기화
    setStoreMarkerList((prev) =>
      prev.map((marker) => ({ ...marker, clicked: false }))
    );
  };

  useEffect(() => {
    if (currentLocation) {
      if (currentLocation.stationEnName === 'ALL') {
        // 현재 위치를 가져와 센터 설정
        fetchCurrentPosition();
      } else {
        // 특정 지하철역으로 설정
        setStoreMarkerList(
          HONGDAELOCATIONS.map((location) => ({ ...location, clicked: false }))
        );
        setCenter({
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        });
      }
    }
  }, [currentLocation]);

  useEffect(() => {
    fetchCurrentPosition();
    // 첫 렌더링 시 전체 스토어 좌표 조회 해서 마커 띄워야함
    // 지금은 더미데이터 넣는 중
    setStoreMarkerList(
      ALLSTATIONLOCATIONS.map((location) => ({ ...location, clicked: false }))
    );
  }, []);

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
          const { src, size } = getMarkerIcon(location);

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
