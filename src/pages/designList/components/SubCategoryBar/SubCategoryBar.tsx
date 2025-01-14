import {
  activeCategoryStyle,
  container,
  defaultCategoryStyle,
} from './SubCategoryBar.css';

interface SubCategoryProps {
  categories: string[];
  selectedSubCategory: string;
  onSubCategoryChange: (category: string) => void;
}

const SubCategoryBar = ({
  categories,
  selectedSubCategory,
  onSubCategoryChange,
}: SubCategoryProps) => {
  return (
    <ul className={container}>
      {categories.map((category) => (
        <li
          className={
            category === selectedSubCategory
              ? activeCategoryStyle
              : defaultCategoryStyle
          }
          onClick={() => onSubCategoryChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryBar;
