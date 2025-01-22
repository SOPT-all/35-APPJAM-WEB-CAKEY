import axios, { AxiosError } from 'axios';

export interface ApiErrorResponse {
  code: number;
  message: string;
}

export const onErrorResponse = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const response = error.response as AxiosError['response'] & {
      data: ApiErrorResponse;
    };

    const httpStatus = response?.status;
    const errorCode = response?.data?.code;

    if (httpStatus === 404) {
      // 40410: 케이크가 없는 경우
      if (errorCode === 40410) {
        return {
          nextCakeIdCursor: 0,
          nextCakeLikesCursor: 0,
          isLastData: false,
          cakeCount: 0,
          cakes: [],
        };
      }

      // //40411: 케이크 좋아요가 없는 경우
      // if (errorCode === 40411) {
      // }

      // // 40420: 스토어가 없는 경우
      // if (errorCode === 40420) {
      // }

      // // 40421: 스토어 좋아요가 없는 경우
      // if (errorCode === 40421) {
      // }

      // // 40422 스토어 카카오 링크가 없는 경우
      // if (errorCode === 40422) {
      // }

      // 40423 스토어 운영시간이 없는 경우

      // 40424 스토어 메인 이미지가 없는 경우

      // 40430 유저 소셜 타입이 없는 경우

      // 40431 유저가 없는 경우
    }

    const errorMessage = '에러입니다.'

    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(new Error('알 수 없는 오류입니다.'));
};
