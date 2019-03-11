import axios from 'axios';

let url;

if (process.env.NODE_ENV === 'production') {
  url = 'https://employee-profiles.herokuapp.com/';
} else {
  url = '';
}

const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // console.log('hello interceptor');
  config.baseURL = url;
  return config; }, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance;
