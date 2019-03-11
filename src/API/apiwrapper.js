import axios from 'axios';

const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use((config) => {
  // console.log('hello interceptor');
  config.baseURL = process.env.NODE_ENV === 'production'
    ? 'https://employee-profiles.herokuapp.com/'
    : '';
  return config;
}, error => Promise.reject(error));

export default instance;
