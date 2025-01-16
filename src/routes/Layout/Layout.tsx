import { Outlet } from 'react-router-dom';

import { Header } from '@components';

import { spacing } from './Layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={spacing} />
      <Outlet />
    </>
  );
};

export default Layout;
