import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  CakeLikesLatest,
  CakeLikesLatestResponse,
} from '@types';

const fetchCakeLikesLatest = async (): Promise<CakeLikesLatest[]> => {
  try {
    const response = await instance.get<
      ApiResponseType<CakeLikesLatestResponse>
    >(END_POINT.FETCH_CAKE_LIKES_LATEST);
    return response.data.data.cakes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchCakeLikesLatest = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.CAKE_LIKES_LATEST],
    queryFn: () => fetchCakeLikesLatest(),
  });
};
