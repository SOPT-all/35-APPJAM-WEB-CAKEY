import Lottie from 'lottie-react';

import { loading } from '@lotties';

import {
  h1Style,
  loadingContainer,
  lottieStyle,
  spanStyle,
  textBox,
} from './Loading.css';

const Loading = () => {
  return (
    <div className={loadingContainer}>
      <Lottie animationData={loading} loop className={lottieStyle} />
      <div className={textBox}>
        <h1 className={h1Style}>잠시만 기다려주세요</h1>
        <span className={spanStyle}>더 맛있고 특별한 케이크를 찾고 있어요</span>
      </div>
    </div>
  );
};

export default Loading;
