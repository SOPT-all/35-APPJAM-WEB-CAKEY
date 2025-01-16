import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import useMapLoader from '@pages/view/hooks/useMapLoader';

import { mapContainer } from './kakaoMap.css';

const KakaoMap = () => {
  useMapLoader();

  const defaultCenter = { lat: 37.556621, lng: 126.923877 };

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

  // useEffect(() => {

  // }, [])
  console.log(import.meta.env.VITE_JAVASCRIPT_KEY);
  return (
    <div className={mapContainer}>
      <Map
        center={defaultCenter}
        level={2}
        style={{ width: '100%', height: '100%' }}
      ></Map>
    </div>
  );
};

export default KakaoMap;
