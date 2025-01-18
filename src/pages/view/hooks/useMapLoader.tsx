import { useKakaoLoader } from 'react-kakao-maps-sdk';

const useMapLoader = () => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_JAVASCRIPT_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });
};

export default useMapLoader;
