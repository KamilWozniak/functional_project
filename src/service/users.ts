import axios, { AxiosInstance } from 'axios';

export const users: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});

export const posts: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});
