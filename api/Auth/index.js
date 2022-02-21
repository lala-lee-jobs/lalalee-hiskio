import axios from 'axios';
import { BaseConfig } from '@/api/config';
import { ResponseInterceptor, ResponseErrorHandler } from '../interceptor';

export default () => {
  const $axios = axios.create(BaseConfig);
  $axios.interceptors.response.use(ResponseInterceptor,ResponseErrorHandler);
  return {
    login(credentials) {
      return $axios.post(`/auth/login`, credentials);
    },
  };
};