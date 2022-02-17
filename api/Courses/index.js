import axios from 'axios';

// 課程 API
const CoursesInstance = () => {
  const instance = axios.create({
    headers: { 'Content-Type': 'application/json' },
  });
  instance.defaults.baseURL = 'https://api.hiskio.com/v2/courses';
  return instance;
};

export default () => {
  const $axios = CoursesInstance();
  return {
    getFundraising() {
      return $axios.get(`/fundraising`);
    },
  };
};