import { ButtonHTMLAttributes } from 'react';

import { IcCheck } from '@svgs';

import { buttonStyle, buttonTextStyle } from './LocationSelectButton.css';

export interface LocationSelectButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  location: string;
  currentLocation: string;
}

const LocationSelectButton = ({
  location,
  currentLocation,
  onClick,
}: LocationSelectButtonProps) => {
  const isSelected = location === currentLocation;

  return (
    <button className={buttonStyle({ isSelected })} onClick={onClick}>
      <span className={buttonTextStyle[`${isSelected}`]}>{location}</span>
      {isSelected && <IcCheck width={28} height={28} />}
    </button>
  );
};

export default LocationSelectButton;
