import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreCoordinate } from '@types';

const fetchSelectStoreCoordinate = async (storeId: number) => {
  const response = await instance.get<ApiResponseType<StoreCoordinate>>(
    END_POINT.FETCH_SELECT_STORE_COORDINATE(storeId)
  );
  if (!response.data) return null;
  return response.data.data;
};

export const useFetchSelectStoreCoordinate = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.SELECT_STORE_COORDINATE, storeId],
    queryFn: () => fetchSelectStoreCoordinate(storeId),
  });
};
