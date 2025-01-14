import { useState } from 'react';
import SizeCard from '../SizeCard/SizeCard';
import { listContainer } from './SizeCardList.css';

const data = {
  sizes: [
    { sizeName: '도시락', price: 18000 },
    { sizeName: '미니', price: 20000 },
    { sizeName: '1호', price: 30000 },
    { sizeName: '2호', price: 40000 },
    { sizeName: '3호', price: 45000 },
  ],
};

const SizeCardList = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) =>
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <ul className={listContainer}>
      {data.sizes.map((item, index) => (
        <SizeCard
          key={index}
          sizeName={item.sizeName}
          price={item.price.toString()}
          isSelected={selectedIndex === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </ul>
  );
};

export default SizeCardList;
