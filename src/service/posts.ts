import axios, { AxiosInstance } from 'axios';

export const posts: AxiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/posts`,
});
