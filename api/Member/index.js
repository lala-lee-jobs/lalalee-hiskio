import axios from 'axios';
import { BaseConfig } from '@/api/config';

export default () => {
  const $axios = axios.create(BaseConfig);
  return {
    getMe(memberToken) {
      return $axios.get(`/me`, {
        headers: {
          Authorization: `Bearer ${memberToken.access_token}`
        },
      });
    },
  }
};