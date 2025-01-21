// 공통으로 사용되는 타입들을 정의합니다.

export interface ApiResponseType<T> {
  code: number;
  message: string;
  data: T;
}

export interface ErrorResponse {
  response: {
    data: {
      code: number;
      message: string;
    };
  };
}
