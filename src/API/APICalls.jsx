import instance from './apiwrapper';

export const getEmployees = () => instance.get('/api/employee');

export const getEmployee = employeeId => instance.get(`/api/employee/${employeeId}`);

export const addEmployee = employee => instance.post('/api/employee', employee);

export const deleteEmployee = employeeId => instance.delete(`/api/employee/${employeeId}`);
