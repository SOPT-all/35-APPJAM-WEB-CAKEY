import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { post } from '@apis/instance';

import { ApiResponseType, LoginSuccessResponse } from '@types';

const postKakaoLogin = async (
  authCode: string
): Promise<AxiosResponse<ApiResponseType<LoginSuccessResponse>>> => {
  const response = await post<ApiResponseType<LoginSuccessResponse>>(
    `/api/v1/user/login`,
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

  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: (response) => {
      const resData = response.data.data;
      if (resData) {
        const { userId, userName } = resData;
        console.log(userId, userName);

        queryClient.invalidateQueries({ queryKey: ['kakaoLogin'] });
      }
    },
  });
};
