import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '@constants';

export interface ApiErrorResponse {
  code: number;
  message: string;
}

export const onErrorResponse = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const response = error.response as AxiosError['response'] & {
      data: ApiErrorResponse;
    };

    const errorCode = response?.data?.code;
    const errorMessage = ERROR_MESSAGE[errorCode];

    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(new Error('알 수 없는 오류입니다.'));
};
