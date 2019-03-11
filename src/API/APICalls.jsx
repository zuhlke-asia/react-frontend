import apiWrapper from './apiwrapper';

const getEmployees = apiWrapper.get('/employee');

export { getEmployees };


const addEmployee = (employee) => {
  apiWrapper.post('/employee', employee);
};

export { addEmployee };
