import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@components';
import { ToastProvider } from '@contexts';
import { useScrollTop } from '@hooks';
import Loading from '@pages/status/Loading/Loading';

import { Error } from '@pages/status';

import { spacing } from './Layout.css';
import routePath from '../routePath';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === routePath.LOGINPAGE;
  const isViewPage = location.pathname === routePath.VIEWPAGE;

  useScrollTop(location.pathname);

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>
            <ToastProvider>
              {!isLoginPage && (
                <>
                  {isViewPage ? <Header bgColor="yellow" /> : <Header />}
                  <div className={spacing} />
                </>
              )}
              <Outlet />
            </ToastProvider>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default Layout;
