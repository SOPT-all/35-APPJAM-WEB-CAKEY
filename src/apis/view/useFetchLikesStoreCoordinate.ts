import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  ErrorResponse,
  StoreCoordinate,
  StoreCoordinateListResponse,
} from '@types';

const fetchLikesStoreCoordinate = async (): Promise<StoreCoordinate[]> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreCoordinateListResponse>
    >(END_POINT.FETCH_LIKES_STORE_COORDINATE_LIST);
    if (!response.data) return [];
    return response.data.data.stores;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.status === 404) {
      return [];
    }
    throw error;
  }
};

export const useFetchLikesStoreCoordinate = (isSaveActive: boolean) => {
  return useQuery({
    queryKey: [queryKey.LIKES_STORE_COORDINATE_LIST],
    queryFn: fetchLikesStoreCoordinate,
    enabled: isSaveActive,
    staleTime: 0,
    gcTime: 0,
  });
};
