import { useNavigate } from 'react-router-dom';

import { useFetchSelectStoreCoordinate, useFetchStoreLink } from '@apis/store';

import { TextButton } from '@components';
import { useToast } from '@contexts';

import { container } from './BottomTab.css';

interface BottomTabProps {
  storeId: number;
}

const BottomTab = ({ storeId }: BottomTabProps) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { data: kakaoLink } = useFetchStoreLink(storeId);
  const { data: selectStoreCoordinate } =
    useFetchSelectStoreCoordinate(storeId);

  const handleMapViewClick = () => {
    if (selectStoreCoordinate) {
      navigate('/view', { state: { location: selectStoreCoordinate } });
    } else {
      showToast('error', '연결에 문제가 생겼어요');
    }
  };

  const handleOrderClick = () => {
    if (kakaoLink) {
      window.open(String(kakaoLink), '_blank');
    } else {
      showToast('error', '연결에 문제가 생겼어요');
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
