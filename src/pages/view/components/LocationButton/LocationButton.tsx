import { IcArrowRight24, IcLocation } from '@svgs';
import {
  buttonStyle,
  currentLocationTextStyle,
  locationBox,
  placeholderStyle,
  sectionStyle,
} from './LocationButton.css';
import { ButtonHTMLAttributes } from 'react';

export interface LocationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentLocation: string;
}

const LocationButton = ({ currentLocation, onClick }: LocationButtonProps) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      <section className={sectionStyle}>
        <IcLocation width={24} height={24} />
        <div className={locationBox}>
          <span className={currentLocationTextStyle}>{currentLocation}</span>
          {currentLocation === '전체' && (
            <span className={placeholderStyle}>지하철 역을 선택해주세요</span>
          )}
        </div>
      </section>
      <IcArrowRight24 width={24} height={24} />
    </button>
  );
};

export default LocationButton;
