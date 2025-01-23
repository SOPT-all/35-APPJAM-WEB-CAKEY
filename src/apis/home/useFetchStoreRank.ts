import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreRank, StoreRankResponse } from '@types';

const fetchStoreRank = async (): Promise<StoreRank[]> => {
  const response = await instance.get<ApiResponseType<StoreRankResponse>>(
    END_POINT.FETCH_STORE_RANK
  );
  if (!response.data) return [];
  return response.data.data.storeList;
};

export const useFetchStoreRank = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_RANK],
    queryFn: fetchStoreRank,
  });
};
