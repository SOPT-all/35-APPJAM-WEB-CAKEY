import { Outlet } from 'react-router-dom';
import { spacing } from './Layout.css';
import { Header } from '@components';

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
