import Lottie from 'lottie-react';

import { TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import { errorLotties } from '@lotties';

import {
  buttonWrapper,
  errorContentWrapper,
  errorLottiesStyle,
  errorMainTextStyle,
  errorPageLayout,
  errorSubTextStyle,
  errorTextWrapper,
} from './Error.css';

const NotFound = () => {
  const { goHomePage } = useEasyNavigate();

  const handleClickButton = () => {
    goHomePage();
  };

  return (
    <div className={errorPageLayout}>
      <div className={errorContentWrapper}>
        <Lottie
          animationData={errorLotties}
          loop
          className={errorLottiesStyle}
        />
        <div className={errorTextWrapper}>
          <h1 className={errorMainTextStyle}>페이지를 찾을 수 없어요</h1>
          <span className={errorSubTextStyle}>잠시 후 다시 연결해주세요</span>
        </div>
      </div>
      <div className={buttonWrapper}>
        <TextButton onClick={handleClickButton} size="xLarge">
          홈으로 돌아가기
        </TextButton>
      </div>
    </div>
  );
};

export default NotFound;
