import apiWrapper from './apiwrapper';

export const getEmployees = () => apiWrapper.get('/api/employee');

export const getEmployee = employeeId => apiWrapper.get(`/api/employee/${employeeId}`);

export const addEmployee = employee => apiWrapper.post('/api/employee', employee);

export const deleteEmployee = employeeId => apiWrapper.delete(`/api/employee/${employeeId}`);
