import { startTransition, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  useFetchLikesStoreCoordinate,
  useFetchStoreCoordinateList,
} from '@apis/view';

import { isLoggedIn } from '@utils';

import { useDebounce } from './useDebounce';

import { BottomSheetState, StationType, StoreCoordinate } from '@types';

const DEFAULT_CENTER = { lat: 37.556621, lng: 126.923877 };

export const useKakaoMap = (
  currentLocation: StationType,
  handleAnimateChange: (animate: BottomSheetState) => void,
  openModal: () => void
) => {
  const { data: storeCoordinateList } = useFetchStoreCoordinateList(
    currentLocation.stationEnName
  );

  const [selectedStoreId, setSelectedStoreId] = useState<number>(0);
  const [storeMarkerList, setStoreMarkerList] = useState<
    (StoreCoordinate & { clicked: boolean })[]
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

  // Map level 관리하기
  const [mapLevel, setMapLevel] = useState(4);

  const { data: likesStoreCoordinateList } =
    useFetchLikesStoreCoordinate();

  const location = useLocation();
  const locationState = location?.state?.location || null;

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
    if (!isLoggedIn()) {
      openModal();
      return;
    }
    setIsSaveActive((prev) => !prev);

    const markerList =
      (isSaveActive ? storeCoordinateList : likesStoreCoordinateList) || [];
    setStoreMarkerList(
      markerList.map((store) => ({ ...store, clicked: false }))
    );
  };

  const handleMarkerClick = (storeId: number) => {
    startTransition(() => {
      setStoreMarkerList((prev) =>
        prev.map((marker) =>
          marker.storeId === storeId
            ? { ...marker, clicked: true }
            : { ...marker, clicked: false }
        )
      );
      setSelectedStoreId(storeId);
    });
  };

  const handleMapClick = () => {
    setStoreMarkerList((prev) =>
      prev.map((marker) => ({ ...marker, clicked: false }))
    );
    setSelectedStoreId(0);
    handleAnimateChange(selectedStoreId !== 0 ? 'default' : 'closed');
  };

  useEffect(() => {
    if (currentLocation) {
      setIsSaveActive(false);
      setIsGpsActive(false);
      if (currentLocation.stationEnName === 'ALL') {
        fetchCurrentPosition();
        setMapLevel(9)
      } else {
        setCenter({
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        });
        setStoreMarkerList(
          storeCoordinateList.map((location) => ({
            ...location,
            clicked: false,
          }))
        );
        setMapLevel(4)
      }
    } else {
      handleAnimateChange('default');
    }
  }, [currentLocation, storeCoordinateList]);

  // useEffect(() => {
  //   fetchCurrentPosition();
  //   if (storeCoordinateList) {
  //     setStoreMarkerList(
  //       storeCoordinateList.map((location) => ({ ...location, clicked: false }))
  //     );
  //   }
  // }, [storeCoordinateList]);

  useEffect(() => {
    if (storeCoordinateList) {
      setStoreMarkerList(
        storeCoordinateList.map((store) => ({
          ...store,
          clicked: false,
        }))
      );
    }
  }, [storeCoordinateList]);

  useEffect(() => {
    if (locationState) {
      setIsGpsActive(false);
      setStoreMarkerList([
        {
          ...locationState,
          clicked: true,
        },
      ]);

      // 지도 중심을 locationState 위치로 설정
      setCenter({
        lat: locationState.latitude,
        lng: locationState.longitude,
      });

      setSelectedStoreId(locationState.storeId);
      handleAnimateChange('closed');
    }
  }, [locationState]);

  return {
    selectedStoreId,
    storeMarkerList,
    currentPosition,
    center,
    isSaveActive,
    isGpsActive,
    mapLevel,
    setCenter,
    handleCenterChanged,
    handleGpsButtonClick,
    handleSaveButtonClick,
    handleMarkerClick,
    handleMapClick,
  };
};
