import IcMypageArrowRight24 from 'src/assets/svgs/IcMypageArrowRight24';

import { letsGoContainer, whereToGo } from './LetsGoButton.css';

const LetsGoButton = ({ text = '마이페이지 카테고리' }) => {
  return (
    <div className={letsGoContainer}>
      <p className={whereToGo}>{text}</p>
      <IcMypageArrowRight24 width={24} height={24} />
    </div>
  );
};

export default LetsGoButton;
