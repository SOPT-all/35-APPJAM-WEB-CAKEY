import { Label } from '@components';

import { IcArrowRight20 } from '@svgs';

import {
  isLiked,
  rankingContainer,
  rankingLeftBox,
  rankingRightBox,
  rankingWrapper,
  rightArrowButton,
  storeName,
} from './StoreRankingButton.css';

const StoreRankingButton = () => {
  return (
    <div className={rankingContainer}>
      <div className={rankingWrapper}>
        <Label />
        <div className={rankingLeftBox}>
          <h3 className={storeName}>서희네 앙큼가게</h3>
          <p className={isLiked}>1.3만</p>
        </div>
      </div>
      <div className={rankingRightBox}>
        <Label />
        <IcArrowRight20 className={rightArrowButton} />
      </div>
    </div>
  );
};

export default StoreRankingButton;
