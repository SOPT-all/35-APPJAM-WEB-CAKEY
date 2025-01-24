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
    const errorResponse = error as ErrorResponse;
    if (
      errorResponse.response.status === 401 ||
      errorResponse.response.status === 404
    ) {
      console.log(error);
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
