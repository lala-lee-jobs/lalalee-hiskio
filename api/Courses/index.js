import axios from 'axios';
import { BaseConfig } from '@/api/config';
import { ResponseInterceptor, ResponseErrorHandler } from '../interceptor';

export default () => {
  const $axios = axios.create(BaseConfig);
  $axios.interceptors.response.use(ResponseInterceptor,ResponseErrorHandler);
  return {
    getFundraising() {
      return $axios.get(`/courses/fundraising?limit=8&course_type=LIVE`);
    },
  };
};