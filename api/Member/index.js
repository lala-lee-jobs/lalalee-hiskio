import axios from 'axios';
import { BaseConfig } from '@/api/config';

export default () => {
  const $axios = axios.create(BaseConfig);
  return {
    getMe(credentials) {
      return $axios.get(`/me`, credentials);
    },
  };
};