type Result<T> = {
  result: T | null;
};

export type BaseResponse = StatusCode & {
  status: boolean;
  message?: string;
};

export type ApiResponse<T> = BaseResponse & Result<T>;
