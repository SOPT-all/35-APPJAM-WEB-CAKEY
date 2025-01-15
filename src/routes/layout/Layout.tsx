import { Outlet } from 'react-router-dom';
import { layoutStyle } from './Layout.css';
import { Header } from '@components';

const Layout = () => {
  return (
    <div className={layoutStyle}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
