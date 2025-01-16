import { ButtonHTMLAttributes } from 'react';

import { IcGpsmarkerOff, IcGpsmarkerOn } from '@svgs';

import { buttonStyle } from './MapGpsButton.css';

export interface MapGpsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const MapGpsButton = ({ isActive, onClick }: MapGpsButtonProps) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      {isActive ? (
        <IcGpsmarkerOn width={24} height={24} />
      ) : (
        <IcGpsmarkerOff width={24} height={24} />
      )}
    </button>
  );
};

export default MapGpsButton;
