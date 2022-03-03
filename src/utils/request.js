/**
 * Axios Request Wrapper
 * ---------------------
 */

import axios from 'axios';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API,
});

const isDev = process.env.NEXT_PUBLIC_APP_ENV !== 'production';

/**
 * Request Wrapper with default success/error actions
 */
const request = function (options) {
  const onSuccess = function (response) {
    if (isDev) console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = function (error) {
    // if (isDev) console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      const { status, data, headers } = error.response;
      if (isDev) {
        console.error('Status:', status);
        console.error('Data:', data);
        console.error('Headers:', headers);
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      if (isDev) console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
