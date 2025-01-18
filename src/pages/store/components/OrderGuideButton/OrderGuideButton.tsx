import { IcArrowRight24 } from '@svgs';

import {
  containerStyle,
  buttonWrapper,
  orderButton,
  orderGuideSubText,
} from './OrderGuideButton.css';

interface OrderGuideButtonProps {
  onOpen: () => void;
}

const OrderGuideButton = ({ onOpen }: OrderGuideButtonProps) => {
  return (
    <li className={containerStyle}>
      <div className={buttonWrapper}>
        <h1>주문서 양식</h1>
        <button className={orderButton} onClick={onOpen}>
          <span>양식 작성하기</span>
          <IcArrowRight24 width={16} height={16} />
        </button>
      </div>
      <p className={orderGuideSubText}>
        ※ 스토어마다 다를 수 있으니 확인해주세요
      </p>
    </li>
  );
};

export default OrderGuideButton;
