// 공통으로 사용되는 타입들을 정의합니다.

export interface ApiResponseType<T> {
  code: number;
  message: string;
  data: T;
}

export interface MutateResposneType {
  code: number;
  message: string;
}

export interface ErrorResponse {
  response: {
    status: number;
  };
}
