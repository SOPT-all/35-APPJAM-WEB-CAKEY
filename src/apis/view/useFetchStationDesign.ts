import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { ApiResponseType, OptionType, StationDesignResponse } from '@types';

const fetchStationDesign = async (
  order: OptionType,
  station: string,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<StationDesignResponse> => {
  try {
    const url = END_POINT.FETCH_STATION_DESIGN_LIST(
      order,
      station,
      cakeLikesCursor,
      cakeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<StationDesignResponse>>(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationDesign = (order: OptionType, station: string) => {
  return useInfiniteQuery<StationDesignResponse, Error>({
    queryKey: [queryKey.STATION_DESIGN_LIST, order, station],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };
      return fetchStationDesign(
        order,
        station,
        param.cakeLikesCursor,
        param.cakeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeLikesCursor:
            'cakeLikesCursor' in lastPage
              ? lastPage.cakeLikesCursor
              : undefined,
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : (lastPage.cakeIdCursor ?? undefined),
        };
      }
      return null;
    },
    initialPageParam: { cakeLikesCursor: undefined, cakeIdCursor: undefined },
  });
};
