import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, CakeRank, CakeRankResponse } from '@types';

const fetchCakeRank = async (): Promise<CakeRank[]> => {
  try {
    const response = await instance.get<ApiResponseType<CakeRankResponse>>(
      END_POINT.FETCH_CAKE_RANK
    );
    return response.data.data.cakeList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchCakeRank = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.CAKE_RANK],
    queryFn: () => fetchCakeRank(),
  });
};
