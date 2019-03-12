import instance from './apiwrapper';

export const getEmployees = (page, sort, direction) => instance.get('/api/employee', { params: { page, sort: `${sort},${direction}` } });

export const getEmployee = employeeId => instance.get(`/api/employee/${employeeId}`);

export const addEmployee = employee => instance.post('/api/employee', employee);

export const deleteEmployee = employeeId => instance.delete(`/api/employee/${employeeId}`);

export const editEmployee = (employeeId, employee) => instance.put(`/api/employee/${employeeId}`, employee);
