import { TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import { container } from './BottomTab.css';

interface BottomTabProps {
  kakaoLink: string;
}

const BottomTab = ({ kakaoLink }: BottomTabProps) => {
  const { goViewPage } = useEasyNavigate();

  const handleOrderClick = () => {
    if (kakaoLink) {
      window.location.href = kakaoLink;
    } else {
      console.error('링크가 존재하지 않습니다.');
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
