import { ButtonHTMLAttributes } from 'react';

import { IcSavedOff24, IcSavedOn24 } from '@svgs';

import { buttonStyle } from './MapSaveButton.css';

export interface MapSaveButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  onToggle: () => void;
}

const MapSaveButton = ({ isActive, onToggle }: MapSaveButtonProps) => {
  return (
    <button onClick={onToggle} className={buttonStyle}>
      {isActive ? (
        <IcSavedOn24 width={24} height={24} />
      ) : (
        <IcSavedOff24 width={24} height={24} />
      )}
    </button>
  );
};

export default MapSaveButton;
