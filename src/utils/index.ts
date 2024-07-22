import axios, { AxiosRequestConfig } from 'axios';

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios.get<T>(url, config);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const post = async <T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios.post<T>(url, data, config);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const put = async <T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios.put<T>(url, data, config);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios.delete<T>(url, config);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const handleApiResponse = <T>(response: T): T => {
  // 處理通用的API響應，例如：統一格式化響應數據，處理特定狀態碼等
  return response;
};

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.error('API error:', error.response?.data, 'Status:', error.response?.status);
    return error.response?.data?.message || `發生未知錯誤: ${error.message}`;
  } else {
    console.error('Unexpected error:', error);
    return `發生未知錯誤: ${error}`;
  }
};
