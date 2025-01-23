import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  DesignCardListType,
  ErrorResponse,
  OptionType,
} from '@types';

const fetchDesignList = async (
  option: OptionType,
  dayCategory: string,
  themeName: string,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<DesignCardListType> => {
  const url = END_POINT.FETCH_DESIGN_LIST(
    option,
    dayCategory,
    themeName,
    cakeLikesCursor,
    cakeIdCursor
  );
  const response = await instance.get<ApiResponseType<DesignCardListType>>(url);
  if (!response.data) return { isLastData: true, cakeCount: 0, cakes: [] };
  return response.data.data;
};

export const useFetchDesignList = (
  option: OptionType,
  dayCategory: string,
  themeName: string
) => {
  return useInfiniteQuery<DesignCardListType, Error>({
    queryKey: [queryKey.DESIGN_LIST, option, dayCategory, themeName],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };
      return fetchDesignList(
        option,
        dayCategory,
        themeName,
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
