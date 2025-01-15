import { categoryBarContainer } from './CategoryBar.css';
import CategoryButton from '../CategoryButton/CategoryButton';

import { CategoryType } from '@types';

interface CategoryBarProps {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const CategoryBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryBarProps) => {
  return (
    <div className={categoryBarContainer}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          isActive={selectedCategory === category}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
