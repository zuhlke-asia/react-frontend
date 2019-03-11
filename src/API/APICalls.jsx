import apiWrapper from './apiwrapper';


const getEmployees = apiWrapper.get('/api/employee/');
export { getEmployees };

const addEmployee = (employee) => { 
  return apiWrapper.post('/api/employee', employee,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
};

export { addEmployee };
