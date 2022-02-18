import axios from 'axios';
import { BaseConfig } from '@/api/config';

export default () => {
  const $axios = axios.create(BaseConfig);
  return {
    saveCarts(carts) {
      return $axios.post(`/carts`, carts);
    },
    deleteCarts(carts) {
      return $axios.delete(`/carts`, carts);
    },
  };
};