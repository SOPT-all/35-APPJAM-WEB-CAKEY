import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from './MapButton.css';

export interface MapButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}

const MapButton = ({
  isActive,
  activeIcon,
  inactiveIcon,
  ...props
}: MapButtonProps) => {
  return (
    <button className={buttonStyle} {...props}>
      {isActive ? activeIcon : inactiveIcon}
    </button>
  );
};

export default MapButton;
