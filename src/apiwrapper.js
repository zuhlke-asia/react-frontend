import axios from 'axios';

const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
   // console.log('hello interceptor');
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  
const getAllEmployees = instance.get('/employee');


export default instance;
