import axios, { AxiosInstance } from 'axios';

export const posts: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});
