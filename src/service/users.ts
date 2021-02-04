import axios, { AxiosInstance } from 'axios';

export const users: AxiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_ADDRESS}/users`,
});
