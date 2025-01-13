import { useState } from 'react';

import { tabButton, tabStyle, clickTab } from './Tab.css';

interface TabProps {
  tabType: 'viewMyPage' | 'store';
}
const tabs = {
  viewMyPage: ['스토어', '디자인'],
  store: ['디자인', '사이즈/맛', '상세정보'],
};

export const Tab = ({ tabType }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabList = tabType === 'viewMyPage' ? tabs.viewMyPage : tabs.store;
  return (
    <div className={tabStyle}>
      {tabList.map((tab, index) => (
        <button
          key={index}
          className={`${tabButton({ tabType })} ${activeTab === index ? clickTab({ tabType }) : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
