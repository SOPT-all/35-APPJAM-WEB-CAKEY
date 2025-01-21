import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, OrderType, queryKey } from '@constants';

import { ApiResponseType, StationDesignResponse } from '@types';

const fetchStationDesign = async (
  order: OrderType,
  station: string,
  pageParam?: number
): Promise<StationDesignResponse> => {
  try {
    const url = pageParam
      ? END_POINT.FETCH_STATION_DESIGN_LIST(order, station, pageParam)
      : END_POINT.FETCH_STATION_DESIGN_LIST(order, station);

    const response =
      await instance.get<ApiResponseType<StationDesignResponse>>(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationDesign = (
  order: OrderType,
  station: string
) => {
  return useInfiniteQuery<StationDesignResponse, Error>({
    queryKey: [queryKey.STATION_DESIGN_LIST, station],
    queryFn: ({ pageParam = 0 }) =>
      fetchStationDesign(order, station, pageParam as number),
    getNextPageParam: (lastPage) => {
      return !lastPage.isLastData ? lastPage.nextCakeIdCursor : null;
    },
    initialPageParam: null,
  });
};
