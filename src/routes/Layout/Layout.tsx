import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@components';
import Loading from '@pages/error/Loading';
import useScrollTop from 'src/hooks/useScrollTop';

import { Error } from '@pages/error';

import { spacing } from './Layout.css';
import routePath from '../routePath';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === routePath.LOGINPAGE;
  const isViewPage = location.pathname === routePath.VIEWPAGE;

  useScrollTop(location.pathname);

  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={Error}>
            <Suspense fallback={<Loading />}>
              {!isLoginPage &&
                (isViewPage ? <Header bgColor="yellow" /> : <Header />)}
              <div className={spacing} />
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
};

export default Layout;
