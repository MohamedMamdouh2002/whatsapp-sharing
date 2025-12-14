import axiosInstance from "./axiosInstance";

export class ApiService {
  static async get<T>(
    endpoint: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T> {
    const response = await axiosInstance.get<T>(endpoint, {
      params,
      headers,
    });
    return response.data;
  }

  static async post<T>(
    url: string,
    data: any,
    returnData: boolean = false,
    isForm: boolean = false,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<void | T> {
    const defaultHeaders = isForm ? {} : { 'Content-Type': 'application/json' };
    const response = await axiosInstance.post<T>(url, data, {
      params,
      headers: { ...defaultHeaders, ...headers },
    });
    return returnData ? response.data : undefined;
  }

  static async put<T>(
    url: string,
    data: any,
    returnData: boolean = false,
    isForm: boolean = false,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<void | T> {
    const defaultHeaders = isForm ? {} : { 'Content-Type': 'application/json' };
    const response = await axiosInstance.put<T>(url, data, {
      params,
      headers: { ...defaultHeaders, ...headers },
    });
    return returnData ? response.data : undefined;
  }

  static async delete<T>(
    endpoint: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<void> {
    await axiosInstance.delete<T>(endpoint, {
      params,
      headers,
    });
  }
}
