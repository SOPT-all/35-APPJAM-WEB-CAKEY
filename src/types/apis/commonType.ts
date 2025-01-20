// 공통으로 사용되는 타입들을 정의합니다.

export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
}
