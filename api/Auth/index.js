import axios from 'axios';
import { BaseConfig } from '@/api/config';

export default () => {
  const $axios = axios.create(BaseConfig);
  return {
    login(credentials) {
      return $axios.post(`/auth/login`, credentials);
    },
  };
};