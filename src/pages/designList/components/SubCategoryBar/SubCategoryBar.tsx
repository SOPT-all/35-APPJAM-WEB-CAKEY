import { SUB_CATEGORY_TEXT } from '@constants';

import {
  activeCategoryStyle,
  container,
  defaultCategoryStyle,
} from './SubCategoryBar.css';

import { SubCategoryType } from '@types';

interface SubCategoryProps {
  categories: SubCategoryType[];
  selectedSubCategory: SubCategoryType;
  onSubCategoryChange: (key: 'subCategory', value: string) => void;
}

const SubCategoryBar = ({
  categories,
  selectedSubCategory,
  onSubCategoryChange,
}: SubCategoryProps) => {
  return (
    <ul className={container}>
      {categories.map((category, index) => (
        <li
          key={index}
          className={
            category === selectedSubCategory
              ? activeCategoryStyle
              : defaultCategoryStyle
          }
          onClick={() => onSubCategoryChange('subCategory', category)}
        >
          {SUB_CATEGORY_TEXT[category]}
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryBar;
