import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreInfoResponse } from '@types';

const fetchStoreInfo = async (storeId: number): Promise<StoreInfoResponse> => {
  try {
    const response = await instance.get<ApiResponseType<StoreInfoResponse>>(
      END_POINT.FETCH_STORE_INFO(storeId)
    );
    return response.data.data;
  } catch (error) {
    console.error();
    throw error;
  }
};

export const useFetchStoreInfo = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_INFO],
    queryFn: () => fetchStoreInfo(storeId),
  });
};
