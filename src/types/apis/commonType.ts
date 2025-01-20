export interface ApiResponseType<T> {
  code: number;
  message: string;
  data: T;
}
