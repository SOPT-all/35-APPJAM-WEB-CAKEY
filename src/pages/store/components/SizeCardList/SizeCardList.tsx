import { useEffect, useRef, useState } from 'react';

import { IcCircleArrowRight42 } from '@svgs';

import {
  containerStyle,
  listContainer,
  scrollButton,
} from './SizeCardList.css';
import SizeCard from '../SizeCard/SizeCard';

const data = {
  // 추후 삭제 예정
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

  // 스크롤 처리 상태
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLeftEdge, setIsLeftEdge] = useState(false);
  const [isRightEdge, setIsRightEdge] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (index: number) =>
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));

  // 스크롤 상태 업데이트 (양 끝 도달 시 스크롤 버튼 비활성화)
  const updateScrollState = () => {
    if (!listRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
    setIsLeftEdge(scrollLeft <= 0);
    setIsRightEdge(scrollLeft + clientWidth >= scrollWidth);
  };

  // 스크롤 이벤트 핸들러 (디바운스)
  const handleScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    setIsScrolling(true);
    scrollTimeoutRef.current = setTimeout(() => {
      updateScrollState();
      setIsScrolling(false);
    }, 150);
  };

  // 스크롤 버튼 클릭 시 양 끝으로 스크롤
  const handleScrollToEdge = (direction: 'left' | 'right') => {
    if (!listRef.current) return;
    const { scrollWidth, clientWidth } = listRef.current;
    listRef.current.scrollTo({
      left: direction === 'left' ? 0 : scrollWidth - clientWidth,
    });
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  return (
    <div className={containerStyle}>
      {!isScrolling && (
        <>
          <button
            onClick={() => handleScrollToEdge('left')}
            className={scrollButton({ position: 'left' })}
            disabled={isLeftEdge}
          >
            <IcCircleArrowRight42 width={30} height={30} />
          </button>
          <button
            onClick={() => handleScrollToEdge('right')}
            className={scrollButton({ position: 'right' })}
            disabled={isRightEdge}
          >
            <IcCircleArrowRight42 width={30} height={30} />
          </button>
        </>
      )}

      <ul className={listContainer} ref={listRef} onScroll={handleScroll}>
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
    </div>
  );
};

export default SizeCardList;
