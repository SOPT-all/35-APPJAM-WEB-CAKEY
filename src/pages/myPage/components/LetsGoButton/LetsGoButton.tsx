import { ButtonHTMLAttributes } from 'react';

import { IcMypageArrowRight24 } from '@svgs';

import { letsGoContainer, whereToGo } from './LetsGoButton.css';

export interface LetsGoButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const LetsGoButton = ({ text, onClick }: LetsGoButtonProps) => {
  return (
    <button className={letsGoContainer} onClick={onClick}>
      <p className={whereToGo}>{text}</p>
      <IcMypageArrowRight24 width={24} height={24} />
    </button>
  );
};

export default LetsGoButton;
