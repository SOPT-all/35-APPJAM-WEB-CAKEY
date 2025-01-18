import { motion, PanInfo } from 'framer-motion';
import { useState, useRef, useCallback, ReactNode } from 'react';

import { useBottomSheet } from '@hooks';

import {
  bottomSheetStyle,
  content,
  handler,
  overlayStyle,
} from './BottomSheet.css';

const OFFSET_THRESHOLD = 100;
const DELTA_THRESHOLD = 5;

const variants = {
  opened: { top: '21vh' },
  default: { top: '55vh' },
  closed: { top: '87vh' },
};

const overlayVariants = {
  opened: { display: 'block' },
  default: { display: 'none' },
  closed: { display: 'none' },
};

interface BottomSheetProps {
  children: ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  const { animateState, handleAnimateChange } = useBottomSheet();

  const contentRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  // 내부 스크롤 위치 감지 함수
  const handleContentScroll = useCallback(() => {
    if (contentRef.current) {
      const newIsAtTop = contentRef.current.scrollTop === 0;
      if (newIsAtTop !== isAtTop) {
        setIsAtTop(newIsAtTop);
      }
    }
  }, [isAtTop]);

  // 드래그 방향에 따라 바텀 시트 상태 관리
  const handleDragEnd = (_event: PointerEvent, info: PanInfo) => {
    if (animateState === 'opened' && info.offset.y < 0) return;

    const { offset, delta } = info;
    const isOverOffset = Math.abs(offset.y) > OFFSET_THRESHOLD;
    const isOverDelta = Math.abs(delta.y) > DELTA_THRESHOLD;
    if (!isOverOffset && !isOverDelta) return;

    if (offset.y > 0) {
      // 아래쪽으로 드래그한 경우
      if (animateState === 'opened' && isAtTop) {
        handleAnimateChange('default');
      } else {
        handleAnimateChange(animateState === 'opened' ? 'default' : 'closed');
      }
    } else {
      // 위쪽으로 드래그한 경우
      handleAnimateChange(animateState === 'closed' ? 'default' : 'opened');
    }
  };

  // 오버레이 클릭 시 바텀 시트 상태 변경
  const handleOverlayTap = () => {
    if (animateState === 'opened') handleAnimateChange('default');
    else if (animateState === 'default') handleAnimateChange('closed');
  };

  console.log(animateState);
  return (
    <>
      <motion.div
        className={bottomSheetStyle}
        initial="default"
        animate={animateState}
        variants={variants}
        transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
        drag={
          animateState !== 'opened' || (animateState === 'opened' && isAtTop)
            ? 'y'
            : false
        }
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        onDragEnd={handleDragEnd}
      >
        <div className={handler} />
        <div
          className={content}
          ref={contentRef}
          onScroll={handleContentScroll}
          style={{ overflowY: animateState === 'opened' ? 'auto' : 'hidden' }}
        >
          {children}
        </div>
      </motion.div>
      <motion.div
        className={overlayStyle}
        initial={false}
        animate={animateState}
        variants={overlayVariants}
        onTap={handleOverlayTap}
      />
    </>
  );
};

export default BottomSheet;
