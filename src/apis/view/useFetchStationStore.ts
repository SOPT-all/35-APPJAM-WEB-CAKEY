import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, OptionType, StationStoreResponse } from '@types';

const fetchStationStore = async (
  order: OptionType,
  station: string,
  storeLikesCursor: number,
  storeIdCursor: number
): Promise<StationStoreResponse> => {
  try {
    const url = END_POINT.FETCH_STATION_STORE_LIST(
      order,
      station,
      storeLikesCursor,
      storeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<StationStoreResponse>>(url);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationStore = (order: OptionType, station: string) => {
  return useInfiniteQuery<StationStoreResponse, Error>({
    queryKey: [queryKey.STATION_STORE_LIST, order, station],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        storeLikesCursor: number;
        storeIdCursor: number;
      };
      return fetchStationStore(
        order,
        station,
        param.storeLikesCursor,
        param.storeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          storeLikesCursor:
            'nextLikesCursor' in lastPage
              ? lastPage.nextLikesCursor
              : undefined,
          storeIdCursor:
            'lastStoreId' in lastPage
              ? (lastPage.lastStoreId ?? undefined)
              : lastPage.nextStoreIdCursor,
        };
      }
      return null;
    },
    initialPageParam: { storeLikesCursor: undefined, storeIdCursor: undefined },
  });
};
