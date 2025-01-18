import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@components';
import useScrollTop from 'src/hooks/useScrollTop';

import { spacing } from './Layout.css';
import routePath from '../routePath';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === routePath.LOGINPAGE;
  const isViewPage = location.pathname === routePath.VIEWPAGE;

  useScrollTop(location.pathname);

  return (
    <>
      {!isLoginPage && (isViewPage ? <Header bgColor="yellow" /> : <Header />)}

      <div className={spacing} />
      <Outlet />
    </>
  );
};

export default Layout;
