import { useState } from 'react';
import {
  buttonTextStyle,
  filteringButtonStyle,
  firstLiStyle,
  iconStyle,
  liStyle,
  selectedLiStyle,
  ulStyle,
} from './FilteringButton.css';
import { IcArrowDown20, IcArrowUp20 } from '@svgs';

interface FilteringButtonProps {
  onOptionSelect: (option: string) => void;
}

const FilteringButton = ({ onOptionSelect }: FilteringButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('최신순');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setIsOpen(false);
  };
  return (
    <>
      <div className={filteringButtonStyle} onClick={toggleDropdown}>
        <button className={buttonTextStyle}>{selectedOption}</button>
        <span className={iconStyle}>
          {isOpen ? <IcArrowUp20 /> : <IcArrowDown20 />}
        </span>
        {isOpen && (
          <ul className={ulStyle}>
            <li
              className={`${liStyle} ${firstLiStyle} ${selectedOption === '최신순' && selectedLiStyle}`}
              onClick={() => handleOptionClick('최신순')}
            >
              최신순
            </li>
            <li
              className={`${liStyle} ${selectedOption === '인기순' && selectedLiStyle}`}
              onClick={() => handleOptionClick('인기순')}
            >
              인기순
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default FilteringButton;
