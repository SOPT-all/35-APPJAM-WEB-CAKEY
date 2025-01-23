import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  ErrorResponse,
  OptionType,
  StationDesignResponse,
} from '@types';

const fetchStationDesign = async (
  option: OptionType,
  station: string,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<StationDesignResponse> => {
  const url = END_POINT.FETCH_STATION_DESIGN_LIST(
    option,
    station,
    cakeLikesCursor,
    cakeIdCursor
  );
  const response =
    await instance.get<ApiResponseType<StationDesignResponse>>(url);
  if (!response.data) return { isLastData: true, cakeCount: 0, cakes: [] };
  return response.data.data;
};

export const useFetchStationDesign = (
  option: OptionType,
  station: string,
  isEnabled: boolean
) => {
  return useInfiniteQuery<StationDesignResponse, Error>({
    queryKey: [queryKey.STATION_DESIGN_LIST, option, station],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };
      return fetchStationDesign(
        option,
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
    enabled: isEnabled,
  });
};
