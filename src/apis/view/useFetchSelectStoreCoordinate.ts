import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreCoordinate } from '@types';

const fetchSelectStoreCoordinate = async (storeId: number) => {
  try {
    const response = await instance.get<ApiResponseType<StoreCoordinate>>(
      END_POINT.FETCH_SELECT_STORE_COORDINATE(storeId)
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchSelectStoreCoordinate = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.SELECT_STORE_COORDINATE],
    queryFn: () => fetchSelectStoreCoordinate(storeId),
  });
};
