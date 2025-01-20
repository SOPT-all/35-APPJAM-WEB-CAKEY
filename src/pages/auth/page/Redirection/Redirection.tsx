import { useEffect } from 'react';

import { usePostKakaoLogin } from '@apis/domains/auth/usePostKakaoLogin';

import { useEasyNavigate } from '@hooks';

const Redirection = () => {
  const { goHomePage } = useEasyNavigate();
  const code: string =
    new URL(window.location.href).searchParams.get('code') || '';
  window.history.forward();
  const { mutate } = usePostKakaoLogin();

  useEffect(() => {
    if (code) mutate(code);
  }, [code, mutate]);

  return <div></div>;
};

export default Redirection;
