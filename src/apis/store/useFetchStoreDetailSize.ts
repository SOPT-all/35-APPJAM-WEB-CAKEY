import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreDetailMenuResponse } from '@types';

const fetchStoreDetailSize = async (
  storeId: number
): Promise<StoreDetailMenuResponse> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreDetailMenuResponse>
    >(END_POINT.FETCH_STORE_DETAIL_SIZE(storeId));
    return response.data.data;
  } catch (error) {
    console.error();
    throw error;
  }
};

export const useFetchStoreDetailSize = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_DETAIL_SIZE, storeId],
    queryFn: () => fetchStoreDetailSize(storeId),
    staleTime: 1000 * 60 * 60 * 24, // 24시간
  });
};
