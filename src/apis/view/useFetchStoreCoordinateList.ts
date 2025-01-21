import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  StoreCoordinate,
  StoreCoordinateListResponse,
} from '@types';

const fetchStoreCoordinateList = async (
  station: string
): Promise<StoreCoordinate[]> => {
  try {
    const response = await instance.get<
      ApiResponseType<StoreCoordinateListResponse>
    >(END_POINT.FETCH_STORE_COORDINATE_LIST(station));
    return response.data.data.stores;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStoreCoordinateList = (station: string) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_COORDINATE_LIST, station],
    queryFn: () => fetchStoreCoordinateList(station),
  });
};
