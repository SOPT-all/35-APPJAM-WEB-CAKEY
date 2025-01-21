import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, OrderType, queryKey } from '@constants';

import { ApiResponseType, StationStoreResponse } from '@types';

const fetchStationStore = async (
  order: OrderType,
  station: string,
  pageParam?: number
): Promise<StationStoreResponse> => {
  try {
    const url = pageParam
      ? END_POINT.FETCH_STATION_STORE_LIST(order, station, pageParam)
      : END_POINT.FETCH_STATION_STORE_LIST(order, station);

    const response =
      await instance.get<ApiResponseType<StationStoreResponse>>(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationStore = (order: OrderType, station: string) => {
  return useInfiniteQuery<StationStoreResponse, Error>({
    queryKey: [queryKey.STATION_STORE_LIST, station],
    queryFn: ({ pageParam = 0 }) =>
      fetchStationStore(order, station, pageParam as number),
    getNextPageParam: (lastPage) => {
      return !lastPage.isLastData ? lastPage.nextStoreIdCursor : null;
    },
    initialPageParam: null,
  });
};
