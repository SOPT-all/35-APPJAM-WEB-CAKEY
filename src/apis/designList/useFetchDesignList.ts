import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  DesignListResponse,
  ErrorResponse,
  OptionType,
} from '@types';

const fetchDesignList = async (
  option: OptionType,
  dayCategory: string,
  themeName: string,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<DesignListResponse> => {
  try {
    const url = END_POINT.FETCH_DESIGN_LIST(
      option,
      dayCategory,
      themeName,
      cakeLikesCursor,
      cakeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<DesignListResponse>>(url);
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.data.code === 40410) {
      return {
        nextCakeIdCursor: 0,
        nextCakeLikesCursor: 0,
        isLastData: false,
        cakeCount: 0,
        cakes: [],
      };
    } else {
      throw error;
    }
  }
};

export const useFetchDesignList = (
  option: OptionType,
  dayCategory: string,
  themeName: string
) => {
  return useInfiniteQuery<DesignListResponse, Error>({
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
