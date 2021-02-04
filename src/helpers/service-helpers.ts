import { AxiosInstance, AxiosPromise } from 'axios';

export const performGetRequestForGivenIds = (axiosInstance: AxiosInstance, ids: number[]): AxiosPromise => {
  const query: string = ids.reduce((acc: string, curr: number) => `${acc}&id=${curr}`, '?');
  return axiosInstance.get(query);
};
