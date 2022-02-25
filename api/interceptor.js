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
  console.log('status', status);
  return data;
};

const ResponseErrorHandler = (error) => {
  // https://stackoverflow.com/questions/50950011/axios-post-request-fails-with-error-status-code-500-internal-server-error
  let e = error;
  if (error.response) {
    e = error.response.data;
    if (error.response.data && error.response.data.error) {
      e = error.response.data.error;
    }
  } else if (error.message) {
    e = error.message;
  } else {
    e = "Unknown error occured";
  }
  return Promise.reject(e);
};

export {
  appendMemberTokenHeader,
  RequestInterceptor,
  RequestErrorHandler,
  ResponseInterceptor,
  ResponseErrorHandler,
};
