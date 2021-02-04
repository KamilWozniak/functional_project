import { AxiosInstance, AxiosPromise } from 'axios';

export const performGetRequestForGivenParam = (axiosInstance: AxiosInstance, param: string, array: any[]): AxiosPromise => {
  const query: string = array.reduce((acc: string, curr: number) => `${acc}&${param}=${curr}`, '?');
  return axiosInstance.get(query);
};
