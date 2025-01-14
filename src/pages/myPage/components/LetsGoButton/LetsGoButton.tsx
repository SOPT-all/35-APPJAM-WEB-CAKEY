import { IcArrowRight24 } from '@svgs';

import { letsGoContainer, whereToGo } from './LetsGoButton.css';

const LetsGoButton = ({ text = '어디로 Lets go?' }) => {
  return (
    <div className={letsGoContainer}>
      <p className={whereToGo}>{text}</p>
      <IcArrowRight24 width={24} height={24} />
    </div>
  );
};

export default LetsGoButton;
