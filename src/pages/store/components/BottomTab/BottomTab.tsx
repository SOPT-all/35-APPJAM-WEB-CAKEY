import { TextButton } from '@components';

import { container } from './BottomTab.css';

const BottomTab = () => {
  return (
    <nav className={container}>
      <TextButton size={'semiLarge'} color={'stroke'}>
        지도뷰
      </TextButton>
      <TextButton size={'semiLarge'}>주문하러가기</TextButton>
    </nav>
  );
};

export default BottomTab;
