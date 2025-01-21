import { useFetchSelectStoreCoordinate, useFetchStoreLink } from '@apis/store';

import { TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import { container } from './BottomTab.css';
import { useNavigate } from 'react-router-dom';

interface BottomTabProps {
  storeId: number;
}

const BottomTab = ({ storeId }: BottomTabProps) => {
  const { data: kakaoLink } = useFetchStoreLink(storeId);
  const { data: selectStoreCoordinate } =
    useFetchSelectStoreCoordinate(storeId);

  // const { goViewPage } = useEasyNavigate();
  const navigate = useNavigate();

  const handleMapViewClick = () => {
    if (selectStoreCoordinate) {
      navigate('/view', { state: { location: selectStoreCoordinate } });
    }
  };

  const handleOrderClick = () => {
    if (kakaoLink) {
      window.open(String(kakaoLink), '_blank');
    }
  };

  return (
    <nav className={container}>
      <TextButton size={'large'} color={'stroke'} onClick={handleMapViewClick}>
        지도뷰
      </TextButton>
      <TextButton size={'large'} onClick={handleOrderClick}>
        주문하러 가기
      </TextButton>
    </nav>
  );
};

export default BottomTab;
