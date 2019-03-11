import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'semantic-ui-react';
import EmployeeCard from './components/Card';
import EmployeeForm from './components/EmployeeForm';
import logo from './logo.svg';
import './App.css';
import { getEmployees, addEmployee } from './API/APICalls';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [firstName, setfn] = useState('');
  const [lastName, setln] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const mapper = {
    fnInput: setfn,
    lnInput: setln,
    addInput: setAddress,
    emailInput: setEmail,
    phoneInput: setPhone,
  };

  const employee = {
    firstName,
    lastName,
    address,
    email,
    phone,
  };

  const inputHandler = (evt, obj) => {
    const { value } = obj;
    mapper[evt.target.name](value);
  };

  const getAllPersons = () => {
    getEmployees()
      .then((res) => {
        console.log('/getEmployee response:', res.data);
        setPersons(res.data.content);
      })
      .catch((error) => {
        setPersons([]);
        console.log(error);
      });
  };

  const handleSubmit = () => {
    console.log('in submit:', employee);

    addEmployee(employee)
      .then((res) => {
        console.log('/addEmployee:', res);
        fetch('https://employee-profiles-client.herokuapp.com/api/employee')
          .then(res2 => res2.json())
          .then((json) => {
            console.log('fetch employees:', json);
            setPersons(json.content);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPersons();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <EmployeeForm handleSubmit={handleSubmit} employee={employee} inputHandler={inputHandler} />
      <Divider horizontal>Employees</Divider>
      <Card.Group>
        {persons.map((person) => {
          return <EmployeeCard refresh={getAllPersons} key={person.id} person={person} />;
        })}
      </Card.Group>
    </div>
  );
};

export default App;
