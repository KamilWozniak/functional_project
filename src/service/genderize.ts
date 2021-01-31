import axios, { AxiosInstance } from 'axios';

export const genderize: AxiosInstance = axios.create({
  baseURL: 'https://api.genderize.io',
});
