import { useState } from 'react';

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
    <div>
      <button>{selectedOption}</button>
      {isOpen && (
        <ul>
          <li onClick={() => handleOptionClick('최신순')}>최신순</li>
          <li onClick={() => handleOptionClick('인기순')}>인기순</li>
        </ul>
      )}
    </div>
  );
};

export default FilteringButton;
