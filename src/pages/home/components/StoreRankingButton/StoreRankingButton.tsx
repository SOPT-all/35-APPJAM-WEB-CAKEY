import { Label } from '@components';

import { IcArrowRight20 } from '@svgs';

import {
  isLiked,
  rankingContainer,
  rankingLeftBox,
  rankingRightBox,
  rankingWrapper,
  rightArrowButton,
  storeNameText,
} from './StoreRankingButton.css';

interface StoreRankingType {
  storeId: number;
  storeName: string;
  storeLikes: number;
  station: string;
}

interface StoreRankingProps {
  data: StoreRankingType;
  rank: number;
}

const StoreRankingButton = ({ data, rank }: StoreRankingProps) => {
  const { storeName, storeLikes, station } = data;

  return (
    <button className={rankingContainer}>
      <div className={rankingWrapper}>
        <Label text={`${rank + 1}`} />
        <div className={rankingLeftBox}>
          <h3 className={storeNameText}>{storeName}</h3>
          <p className={isLiked}>{storeLikes}</p>
        </div>
      </div>
      <div className={rankingRightBox}>
        <Label text={station} />
        <IcArrowRight20 className={rightArrowButton} />
      </div>
    </button>
  );
};

export default StoreRankingButton;
