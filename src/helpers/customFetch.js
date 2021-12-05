/* eslint-disable no-undef */

const customFetch = async(uri, options) => {
  return fetch(uri, options)
    .then(response => {
      if (response.status >= 500) {  // or handle 400 errors
          return Promise.reject(response.status);
      }
      return response;
    });
};
export default customFetch;
