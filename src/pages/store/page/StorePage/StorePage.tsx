import { useState } from 'react';
import { pageStyle } from './StorePage.css';

import { Tab } from '@components';
import Banner from '@pages/store/components/Banner/Banner';
import BottomTab from '@pages/store/components/BottomTab/BottomTab';
import StoreDesign from '@pages/store/components/StoreDesign/StoreDesign';
import StoreInfo from '@pages/store/components/StoreInfo/StoreInfo';
import StoreMenu from '@pages/store/components/StoreMenu/StoreMenu';

const StorePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabComponents = [<StoreDesign />, <StoreMenu />, <StoreInfo />];

  return (
    <div className={pageStyle}>
      <Banner />
      <Tab
        tabType={'store'}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      {tabComponents[activeTab]}
      <BottomTab />
    </div>
  );
};

export default StorePage;
