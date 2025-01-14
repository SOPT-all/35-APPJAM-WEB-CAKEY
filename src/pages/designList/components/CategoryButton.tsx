interface CategoryButtonProps {
  categories: string[];
}

const CategoryButton = ({ categories }: CategoryButtonProps) => {
  return (
    <ul>
      {categories.map((category) => {
        return (
          <div>
            <div>
                
            </div>
            <li>{category}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default CategoryButton;
