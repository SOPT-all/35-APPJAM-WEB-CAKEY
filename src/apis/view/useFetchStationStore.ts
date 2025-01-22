import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, OrderType, queryKey } from '@constants';

import {
  ApiResponseType,
  StationStorePopularityResponse,
  StationStoreResponse,
} from '@types';

type OrderTypeResponse<T extends OrderType> = T extends 'latest'
  ? StationStoreResponse
  : T extends 'popularity'
    ? StationStorePopularityResponse
    : never;

const fetchStationStore = async <T extends OrderType>(
  order: T,
  station: string,
  storeLikesCursor: number,
  storeIdCursor: number
): Promise<OrderTypeResponse<T>> => {
  try {
    const url = END_POINT.FETCH_STATION_STORE_LIST(
      order,
      station,
      storeLikesCursor,
      storeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<OrderTypeResponse<T>>>(url);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationStore = <T extends OrderType>(
  order: T,
  station: string
) => {
  return useInfiniteQuery<OrderTypeResponse<T>, Error>({
    queryKey: [queryKey.STATION_STORE_LIST, order, station],
    queryFn: ({
      pageParam = { storeLikesCursor: undefined, storeIdCursor: undefined },
    }) => {
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
              ? lastPage.lastStoreId
              : lastPage.nextStoreIdCursor,
        };
      }
      return null;
    },
    initialPageParam: { storeLikesCursor: undefined, storeIdCursor: undefined },
  });
};
