import axios from 'axios';
import { BaseConfig } from '@/api/config';
import {
  appendMemberTokenHeader,
  RequestErrorHandler,
  ResponseInterceptor, 
  ResponseErrorHandler,
} from '@/api/interceptor';

export default () => {
  const $axios = axios.create(BaseConfig);
  $axios.interceptors.request.use(appendMemberTokenHeader,RequestErrorHandler);
  $axios.interceptors.response.use(ResponseInterceptor,ResponseErrorHandler);
  return {
    listMemberCarts() {
      return $axios.post(`/carts`, {items:[], coupons: []});
    },
    saveCarts({items, coupons}) {
      return $axios.post(`/carts`, {items, coupons});
    },
    deleteCarts({items, coupons}) {
      return $axios.delete(`/carts`,  {items, coupons});
    },
  };
};