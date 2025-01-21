import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StationType } from '@types';

const fetchStations = async (): Promise<StationType[] | null> => {
  try {
    const response = await instance.get<ApiResponseType<StationType[]>>(
      END_POINT.FETCH_STORE_STATIONS
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useFetchStations = () => {
  return useQuery({
    queryKey: [queryKey.STORE_STATIONS],
    queryFn: () => fetchStations(),
    staleTime: 1000 * 60 * 60 * 24, // 24시간
    gcTime: 1000 * 60 * 60 * 24 * 7, // 7일
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
