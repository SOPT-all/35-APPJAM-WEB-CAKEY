import { TextButton } from '@components';

import { container } from './BottomTab.css';

const BottomTab = () => {
  return (
    <nav className={container}>
      <TextButton size={'large'} color={'stroke'}>
        지도뷰
      </TextButton>
      <TextButton size={'large'}>주문하러 가기</TextButton>
    </nav>
  );
};

export default BottomTab;
