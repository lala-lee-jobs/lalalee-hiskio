import axios from 'axios';
import { BaseConfig } from '@/api/config';

export default () => {
  const $axios = axios.create(BaseConfig);
  return {
    getFundraising() {
      return $axios.get(`/courses/fundraising?limit=8&course_type=LIVE`);
    },
  };
};