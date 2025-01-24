import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  StoreCoordinate,
  StoreCoordinateListResponse,
} from '@types';

const fetchLikesStoreCoordinate = async (): Promise<StoreCoordinate[]> => {
  const response = await instance.get<
    ApiResponseType<StoreCoordinateListResponse>
  >(END_POINT.FETCH_LIKES_STORE_COORDINATE_LIST);
  if (!response.data) return [];
  return response.data.data.stores;
};

export const useFetchLikesStoreCoordinate = () => {
  return useQuery({
    queryKey: [queryKey.LIKES_STORE_COORDINATE_LIST],
    queryFn: fetchLikesStoreCoordinate,
    staleTime: 0,
    gcTime: 0,
  });
};
