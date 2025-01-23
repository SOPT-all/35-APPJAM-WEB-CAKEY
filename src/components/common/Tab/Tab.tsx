import { useEffect, useState } from 'react';

import { tabButton, tabStyle, clickTab, tabIndicator } from './Tab.css';

interface TabProps {
  tabType: 'viewMyPage' | 'store';
  activeTab: number;
  onTabChange: (index: number) => void;
}

const tabs = {
  viewMyPage: ['스토어', '디자인'],
  store: ['디자인', '사이즈/맛', '상세정보'],
};

export const Tab = ({ tabType, activeTab, onTabChange }: TabProps) => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const tabList = tabType === 'viewMyPage' ? tabs.viewMyPage : tabs.store;

  useEffect(() => {
    const position = (activeTab / tabList.length) * 100;
    setIndicatorPosition(position);
  }, [activeTab, tabList.length]);

  return (
    <div className={tabStyle({ tabType })}>
      {tabList.map((tab, index) => (
        <div key={index} style={{ position: 'relative', width: '100%' }}>
          <button
            className={`${tabButton({ tabType })} ${activeTab === index ? clickTab({ tabType }) : ''}`}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </button>
        </div>
      ))}
      <div
        className={tabIndicator({ tabType })}
        style={{
          left: `${indicatorPosition}%`,
          width: `${100 / tabList.length}%`,
        }}
      />
    </div>
  );
};

export default Tab;
