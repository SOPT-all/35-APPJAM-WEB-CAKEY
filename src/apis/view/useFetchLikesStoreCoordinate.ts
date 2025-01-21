import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  StoreCoordinate,
  StoreCoordinateListResponse,
} from '@types';

const fetchLikesStoreCoordinate = async (): Promise<StoreCoordinate[]> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreCoordinateListResponse>
    >(END_POINT.FETCH_LIKES_STORE_COORDINATE_LIST);
    return response.data.data.stores;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchLikesStoreCoordinate = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.LIKES_STORE_COORDINATE_LIST],
    queryFn: () => fetchLikesStoreCoordinate(),
  });
};
