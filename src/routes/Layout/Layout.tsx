import { Outlet } from 'react-router-dom';

import { Header } from '@components';
import useScrollTop from 'src/hooks/useScrollTop';

import { spacing } from './Layout.css';

const Layout = () => {
  useScrollTop();
  return (
    <>
      <Header />
      <div className={spacing} />
      <Outlet />
    </>
  );
};

export default Layout;
