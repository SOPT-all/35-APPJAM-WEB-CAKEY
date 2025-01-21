import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreDetailInfoResponse } from '@types';

const fetchStoreDetailInfo = async (
  storeId: number
): Promise<StoreDetailInfoResponse> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreDetailInfoResponse>
    >(END_POINT.FETCH_STORE_DETAIL_INFO(storeId));
    return response.data.data;
  } catch (error) {
    console.error();
    throw error;
  }
};

export const useFetchStoreDetailInfo = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_DETAIL_INFO],
    queryFn: () => fetchStoreDetailInfo(storeId),
  });
};
