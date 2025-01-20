import { useSuspenseQuery } from '@tanstack/react-query';
import { UseSuspenseQueryResult } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants/apis/api';
import { queryKey } from '@constants/apis/queryKey';

import { ApiResponseType, StoreRankResponse } from '@types';

const fetchStoreRank = async (): Promise<StoreRankResponse> => {
  try {
    const response = await instance.get<ApiResponseType<StoreRankResponse>>(
      END_POINT.FETCH_STORE_RANK
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const useFetchStoreRank = (): UseSuspenseQueryResult<
  StoreRankResponse,
  Error
> => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_RANK],
    queryFn: fetchStoreRank,
  });
};
