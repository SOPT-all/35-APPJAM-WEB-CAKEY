import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { post } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { useEasyNavigate } from '@hooks';

import { ApiResponseType, LoginSuccessResponse } from '@types';

const postKakaoLogin = async (
  authCode: string
): Promise<AxiosResponse<ApiResponseType<LoginSuccessResponse>>> => {
  const response = await post<ApiResponseType<LoginSuccessResponse>>(
    END_POINT.KAKAO_LOGIN,
    {
      socialType: 'KAKAO',
    },
    {
      headers: {
        Authorization: authCode,
      },
    }
  );

  return response;
};

export const usePostKakaoLogin = () => {
  const queryClient = useQueryClient();
  const { goHomePage } = useEasyNavigate();

  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: (response) => {
      const resData = response.data.data;
      if (resData) {
        // const { userId, userName } = resData;
        localStorage.setItem('user', JSON.stringify(resData));

        queryClient.invalidateQueries({ queryKey: [queryKey.KAKAO_LOGIN] });
        goHomePage();
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
