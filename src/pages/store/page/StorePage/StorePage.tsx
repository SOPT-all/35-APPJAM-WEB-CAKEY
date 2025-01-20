import { useState } from 'react';

import { useFetchStoreLink } from '@apis/store';

import { Tab } from '@components';
import Banner from '@pages/store/components/Banner/Banner';
import BottomTab from '@pages/store/components/BottomTab/BottomTab';
import StoreDesign from '@pages/store/components/StoreDesign/StoreDesign';
import StoreInfo from '@pages/store/components/StoreInfo/StoreInfo';
import StoreMenu from '@pages/store/components/StoreMenu/StoreMenu';

import data from './storeData';
import { sectionStyle } from './StorePage.css';

const StorePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // const { data: storeData } = useFetchStoreInfo(1);
  const storeData = data.storeData;
  // const { data: designData } = useFetchStoreDetailDesign(1);
  const designData = data.designData;
  // const { data: menuData } = useFetchStoreDetailSize(1);
  const menuData = data.menuData;
  // const { data: infoData } = useFetchStoreDetailInfo(1);
  const infoData = data.infoData;
  const { data: linkData } = useFetchStoreLink(1);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabComponents = [
    <StoreDesign designData={designData} />,
    <StoreMenu menuData={menuData} />,
    <StoreInfo infoData={infoData} />,
  ];

  return (
    <>
      <Banner storeData={storeData} />
      <Tab
        tabType={'store'}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <section className={sectionStyle}>{tabComponents[activeTab]}</section>
      <BottomTab kakaoLink={linkData.kakaoLink} />
    </>
  );
};

export default StorePage;
