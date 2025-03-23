import { ButtonHTMLAttributes, ReactNode } from 'react';

import { IcCheck } from '@svgs';

import { buttonLabelStyle, buttonStyle, buttonTextStyle, buttonTextWrapper } from './LocationSelectButton.css';

export interface LocationSelectButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  location: string | ReactNode;
  currentLocation: string;
  hasLabel?: boolean;
}

const LocationSelectButton = ({
  location,
  currentLocation,
  onClick,
  hasLabel = false,
}: LocationSelectButtonProps) => {
  const isSelected = location === currentLocation;

  return (
    <button className={buttonStyle({ isSelected })} onClick={onClick}>
      <div className={buttonTextWrapper}>
        {hasLabel && <div className={buttonLabelStyle}>기본</div>}
        <span className={buttonTextStyle[`${isSelected}`]}>{location}</span>
      </div>
      {isSelected && <IcCheck width={28} height={28} />}
    </button>
  );
};

export default LocationSelectButton;
