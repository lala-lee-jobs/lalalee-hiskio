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
    listMemberCarts() {
      return $axios.post(`/carts`, {items:[], coupons: []});
    },
    saveCarts({items, coupons}) {
      return $axios.post(`/carts`, {items, coupons});
    },
    deleteCarts(carts) {
      return $axios.delete(`/carts`, carts);
    },
  };
};