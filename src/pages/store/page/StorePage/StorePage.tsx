import { useState } from 'react';


import { Tab } from '@components';
import Banner from '@pages/store/components/Banner/Banner';
import BottomTab from '@pages/store/components/BottomTab/BottomTab';
import StoreDesign from '@pages/store/components/StoreDesign/StoreDesign';
import StoreInfo from '@pages/store/components/StoreInfo/StoreInfo';
import StoreMenu from '@pages/store/components/StoreMenu/StoreMenu';

import { sectionStyle } from './StorePage.css';

const StorePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabComponents = [<StoreDesign />, <StoreMenu />, <StoreInfo />];

  return (
    <>
      <Banner />
      <Tab
        tabType={'store'}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <section className={sectionStyle}>{tabComponents[activeTab]}</section>
      <BottomTab />
    </>
  );
};

export default StorePage;
