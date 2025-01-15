import { IcMypageArrowRight24 } from '@svgs';

import { letsGoContainer, whereToGo } from './LetsGoButton.css';

const LetsGoButton = ({ text = '마이페이지 카테고리' }) => {
  return (
    <button className={letsGoContainer}>
      <p className={whereToGo}>{text}</p>
      <IcMypageArrowRight24 width={24} height={24} />
    </button>
  );
};

export default LetsGoButton;
