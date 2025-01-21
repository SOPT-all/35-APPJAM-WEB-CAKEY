import { useFetchStoreLink } from '@apis/store';

import { TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import { container } from './BottomTab.css';

interface BottomTabProps {
  storeId: number;
}

const BottomTab = ({ storeId }: BottomTabProps) => {
  const { data: kakaoLink } = useFetchStoreLink(storeId);

  const { goViewPage } = useEasyNavigate();

  const handleOrderClick = () => {
    if (kakaoLink) {
      window.location.href = String(kakaoLink);
    }
  };

  return (
    <nav className={container}>
      <TextButton size={'large'} color={'stroke'} onClick={goViewPage}>
        지도뷰
      </TextButton>
      <TextButton size={'large'} onClick={handleOrderClick}>
        주문하러 가기
      </TextButton>
    </nav>
  );
};

export default BottomTab;
