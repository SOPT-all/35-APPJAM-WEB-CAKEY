import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, UserResponse } from '@types';

const fetchUser = async (): Promise<UserResponse> => {
  const response = await instance.get<ApiResponseType<UserResponse>>(
    END_POINT.FETCH_USER
  );
  if (!response.data)
    return {
      userName: '',
      userEmail: '',
    };
  return response.data.data;
};

export const useFetchUser = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.USER],
    queryFn: fetchUser,
  });
};
