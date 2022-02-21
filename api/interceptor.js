import Cookies from 'js-cookie';

const appendMemberTokenHeader = (config) => {
  const memberToken = JSON.parse(Cookies.get('memberToken'));
  config.headers.common = config.headers.common || {};
  config.headers.common.Authorization = memberToken
    ? `Bearer ${memberToken.access_token}`
    : null;
  return config;
};

const RequestInterceptor= (config) => {
  return config;
};

const RequestErrorHandler = (err) => {
  return Promise.reject(err);
};

const ResponseInterceptor = (res) => {
  const { status, data } = res;
  return data;
};

const ResponseErrorHandler = (err) => {
  return Promise.reject(err);
};

export {
  appendMemberTokenHeader,
  RequestInterceptor,
  RequestErrorHandler,
  ResponseInterceptor,
  ResponseErrorHandler,
};
