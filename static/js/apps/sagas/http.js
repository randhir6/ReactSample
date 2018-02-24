import axios from 'axios';

export function HttpHelper(url, method, data, params) {
  return axios({
    method,
    url,
    params,
    data,
    withCredentials: true
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    });
}