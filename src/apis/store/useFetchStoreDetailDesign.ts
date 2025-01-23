import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  StoreDetailDesignResponse,
  StoreDetailDesign,
} from '@types';

const fetchStoreDetailDesign = async (
  storeId: number
): Promise<StoreDetailDesign[]> => {
  const response = await instance.get<
    ApiResponseType<StoreDetailDesignResponse>
  >(END_POINT.FETCH_STORE_DETAIL_DESIGN(storeId));
  if (!response.data) return [];
  return response.data.data.storeDesignDtoList;
};

export const useFetchStoreDetailDesign = (storeId: number) => {
  return useSuspenseQuery<StoreDetailDesign[]>({
    queryKey: [queryKey.STORE_DETAIL_DESIGN, storeId],
    queryFn: () => fetchStoreDetailDesign(storeId),
  });
};
