import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreDetailDesignResponse } from '@types';

const fetchStoreDetailDesign = async (
  storeId: number
): Promise<StoreDetailDesignResponse> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreDetailDesignResponse>
    >(END_POINT.FETCH_STORE_DETAIL_DESIGN(storeId));
    return response.data.data;
  } catch (error) {
    console.error();
    throw error;
  }
};

export const useFetchStoreDetailDesign = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_DETAIL_DESIGN],
    queryFn: () => fetchStoreDetailDesign(storeId),
  });
};
