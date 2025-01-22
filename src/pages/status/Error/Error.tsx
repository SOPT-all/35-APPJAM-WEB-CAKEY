import Lottie from 'lottie-react';
import { FallbackProps } from 'react-error-boundary';

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

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorCode = error.response.status;

  const { goHomePage } = useEasyNavigate();

  const handleClickButton = () => {
    goHomePage();
    resetErrorBoundary();
  };

  // 잘못된 요청이에요.
  const badRequestError = [400, 401, 403, 404];
  const isBadRequestError = badRequestError.includes(errorCode);

  // 연결이 불안정해요.
  const unstableNetworkError = [405, 409, 500];
  const isUnstableNetworkError = unstableNetworkError.includes(errorCode);

  return (
    <div className={errorPageLayout}>
      <div className={errorContentWrapper}>
        <Lottie
          animationData={errorLotties}
          loop
          className={errorLottiesStyle}
        />
        <div className={errorTextWrapper}>
          <h1 className={errorMainTextStyle}>
            {isBadRequestError && '잘못된 요청이에요'}
            {isUnstableNetworkError && '연결이 불안정해요..'}
          </h1>
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

export default Error;
