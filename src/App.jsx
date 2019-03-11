import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'semantic-ui-react';
import EmployeeCard from './components/Card';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';
import { getEmployees } from './API/APICalls';

const App = () => {
  const [persons, setPersons] = useState([]);

  const getAllPersons = async () => {
    await getEmployees()
      .then((res) => {
        console.log(res.data);
        setPersons(res.data.content);
      })
      .catch((error) => {
        setPersons([]);
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
      <Form />
      <Divider horizontal>Employees</Divider>
      <Card.Group>
        {persons.map((person) => {
          console.log('person');
          console.log(person);
          return <EmployeeCard key={person.id} person={person} />;
        })}
      </Card.Group>
    </div>
  );
};

export default App;
