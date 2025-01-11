// import {
//   IcBookmarkFill,
//   IcBookmarkStroke,
//   IcHeartFill,
//   IcHeartStroke,
// } from '@svgs';

import { IcBookmark } from '@svgs';
import { ButtonHTMLAttributes, useState } from 'react';
import { buttonStyle, countStyle, iconStyle } from './IconButton.css';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like';
  isActive?: boolean;
  count?: number;
  onMap: boolean;
}

// const buttonIcon = {
//   save: {
//     active: <IcBookmarkFill />,
//     inactive: <IcBookmarkStroke />,
//   },
//   like: {
//     active: <IcHeartFill />,
//     inactive: <IcHeartStroke />,
//   },
// };
const buttonIcon = {
  save: {
    active: <IcBookmark />,
    inactive: <IcBookmark />,
  },
  like: {
    active: <IcBookmark />,
    inactive: <IcBookmark />,
  },
};

const IconButton = ({
  buttonType,
  isActive,
  count,
  onMap,
}: IconButtonProps) => {
  const [active, setActive] = useState(isActive);

  const handleButtonClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <button className={buttonStyle({ onMap })} onClick={handleButtonClick}>
      <span className={iconStyle}>
        {active
          ? buttonIcon[buttonType].active
          : buttonIcon[buttonType].inactive}
      </span>
      {count !== undefined && <span className={countStyle}>{count}</span>}
    </button>
  );
};

export default IconButton;
