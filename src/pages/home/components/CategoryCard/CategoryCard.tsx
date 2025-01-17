import { CATEGORY_COMPONENT } from '@constants';

import {
  buttonWrapper,
  categoryIconWrapper,
  categoryTextStyle,
  hashtagTextStyle,
  hashtagTextWrapper,
} from './CategoryCard.css';

import { CategoryType } from '@types';

interface CategoryCardProps {
  category: CategoryType;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const categoryText = CATEGORY_COMPONENT[category].text;
  const hashtagText = CATEGORY_COMPONENT[category].hashtag;
  const categoryIcon = CATEGORY_COMPONENT[category].icon;

  const handleClickButton = () => {}; // 나중에 navigate 넣을거임

  return (
    <button className={buttonWrapper} onClick={handleClickButton}>
      <div className={hashtagTextWrapper}>
        {hashtagText.map((tag) => (
          <h2 className={hashtagTextStyle}>{tag}</h2>
        ))}
      </div>
      <h1 className={categoryTextStyle}>{categoryText}</h1>
      <div className={categoryIconWrapper}>{categoryIcon}</div>
    </button>
  );
};

export default CategoryCard;
