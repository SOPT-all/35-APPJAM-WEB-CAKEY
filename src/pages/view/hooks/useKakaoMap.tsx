import { useEffect, useState } from 'react';

import {
  ALLSTATIONLOCATIONS,
  HONGDAELOCATIONS,
  SAVEDLOCATIONS,
} from 'src/constants/stations';

import { useDebounce } from './useDebounce';

import { BottomSheetState, CoordinateType, StationType } from '@types';

const DEFAULT_CENTER = { lat: 37.556621, lng: 126.923877 };

export const useKakaoMap = (
  currentLocation: StationType,
  handleAnimateChange: (animate: BottomSheetState) => void
) => {
  const [selectedStoreId, setSelectedStoreId] = useState<number>(0);
  const [storeMarkerList, setStoreMarkerList] = useState<
    (CoordinateType & { clicked: boolean })[]
  >([]);

  // 현재 사용자의 위치
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>(DEFAULT_CENTER);

  // 지도의 중심 좌표
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>(DEFAULT_CENTER);

  // 찜 버튼 활성화 상태
  const [isSaveActive, setIsSaveActive] = useState(false);

  // gps 버튼 활성화 상태
  const [isGpsActive, setIsGpsActive] = useState(false);

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
          setCurrentPosition(DEFAULT_CENTER);
          setCenter(DEFAULT_CENTER);
          setIsGpsActive(false);
        }
      );
    }
  };

  // useDebounce 훅 사용
  const { debouncedFunction: handleDebouncedCenterChange } = useDebounce(
    (map: kakao.maps.Map) => {
      const lat = map.getCenter().getLat();
      const lng = map.getCenter().getLng();
      setCenter({ lat, lng });
    },
    500
  );

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

  const handleMarkerClick = (storeId: number) => {
    setStoreMarkerList((prev) =>
      prev.map((marker) =>
        marker.storeId === storeId
          ? { ...marker, clicked: true }
          : { ...marker, clicked: false }
      )
    );
    setSelectedStoreId(storeId);
  };

  const handleMapClick = () => {
    // 지도 빈 공간 클릭 시 모든 마커의 clicked 상태를 초기화
    setStoreMarkerList((prev) =>
      prev.map((marker) => ({ ...marker, clicked: false }))
    );
    setSelectedStoreId(0);
    handleAnimateChange(selectedStoreId !== 0 ? 'default' : 'closed');
  };

  useEffect(() => {
    if (currentLocation) {
      if (currentLocation.stationEnName === 'ALL') {
        fetchCurrentPosition();
      } else {
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
    setStoreMarkerList(
      ALLSTATIONLOCATIONS.map((location) => ({ ...location, clicked: false }))
    );
  }, []);

  return {
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
  };
};
