import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, OptionType, StationStoreResponse } from '@types';

const fetchStationStore = async (
  option: OptionType,
  station: string,
  storeLikesCursor: number,
  storeIdCursor: number
): Promise<StationStoreResponse> => {
  try {
    const url = END_POINT.FETCH_STATION_STORE_LIST(
      option,
      station,
      storeLikesCursor,
      storeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<StationStoreResponse>>(url);

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchStationStore = (
  option: OptionType,
  station: string,
  isEnabled: boolean
) => {
  return useInfiniteQuery<StationStoreResponse, Error>({
    queryKey: [queryKey.STATION_STORE_LIST, option, station],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        storeLikesCursor: number;
        storeIdCursor: number;
      };
      return fetchStationStore(
        option,
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
    enabled: isEnabled,
  });
};
