import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { mapContainer } from './kakaoMap.css';

const KakaoMap = () => {
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

  return (
    <div className={mapContainer}>
      <Map center={center} level={2}></Map>
    </div>
  );
};

export default KakaoMap;
