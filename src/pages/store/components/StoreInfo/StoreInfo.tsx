import { useState } from 'react';

import { formatHours } from '@utils';
import { IcArrowDown20, IcLineLocation, IcPhone, IcTime } from '@svgs';

import {
  listStyle,
  listContainer,
  listBox,
  listTitle,
  listContent,
  dayOff,
  toggleButton,
} from './StoreInfo.css';

const data = {
  monOpen: '09:00',
  monClose: '18:00',
  tueOpen: '09:00',
  tueClose: '18:00',
  wedOpen: '09:00',
  wedClose: '18:00',
  thuOpen: null,
  thuClose: null,
  friOpen: '09:00',
  friClose: '18:00',
  satOpen: '09:00',
  satClose: '18:00',
  sunOpen: '09:00',
  sunClose: '18:00',
  address: '서울특별시 중구 동호로 385-2 아이디어회관 301호',
  phone: '010-1234-1234',
};

interface InfoItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const StoreInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedHours = formatHours(data);

  const infoItems: InfoItem[] = [
    {
      id: 'hours',
      icon: <IcTime width={24} height={24} />,
      title: '영업 시간',
      content: (
        <ul className={listContent}>
          <li className={dayOff}>
            <span>월 정기휴무 (매주 월요일)</span>
            <IcArrowDown20
              width={20}
              height={20}
              className={toggleButton({ isOpen })}
              onClick={() => setIsOpen(!isOpen)}
            />
          </li>
          {isOpen &&
            formattedHours.map((time, index) => {
              return time ? <li key={index}>{time}</li> : null;
            })}
        </ul>
      ),
    },
    {
      id: 'location',
      icon: <IcLineLocation width={24} height={24} />,
      title: '위치',
      content: <p className={listContent}>{data.address}</p>,
    },
    {
      id: 'contact',
      icon: <IcPhone width={24} height={24} />,
      title: '연락처',
      content: <p className={listContent}>{data.phone}</p>,
    },
  ];

  return (
    <ul className={listStyle}>
      {infoItems.map(({ id, icon, title, content }) => (
        <li key={id} className={listContainer}>
          {icon}
          <div className={listBox}>
            <h2 className={listTitle}>{title}</h2>
            {content}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoreInfo;
