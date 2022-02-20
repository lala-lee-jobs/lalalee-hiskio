import axios from 'axios';
import { BaseConfig } from '@/api/config';
import {
  appendMemberTokenHeader,
  RequestErrorHandler
} from '@/api/interceptor';

export default () => {
  const $axios = axios.create(BaseConfig);
  $axios.interceptors.request.use(appendMemberTokenHeader,RequestErrorHandler);
  return {
    getMe() {
      return $axios.get(`/me`);
    },
  }
};