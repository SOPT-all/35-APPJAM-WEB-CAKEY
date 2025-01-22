import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, ErrorResponse, UserResponse } from '@types';

const fetchUser = async (): Promise<UserResponse> => {
  try {
    const response = await instance.get<ApiResponseType<UserResponse>>(
      END_POINT.FETCH_USER
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.data.code === 40431) {
      return {
        userName: '',
        userEmail: '',
      };
    }

    throw error;
  }
};

export const useFetchUser = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.USER],
    queryFn: fetchUser,
  });
};
