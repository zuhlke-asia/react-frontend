import React from 'react';
import { Divider, CardGroup } from 'semantic-ui-react';
import EmployeeCard from './components/Card';
import Form from './components/Form';
import logo from './logo.svg';
import apiWrapper from './apiwrapper';
import './App.css';


const App = () => {
  let persons = [];

  apiWrapper.get('/employee')
    .then((res) => {
      persons = res.data;
      console.log(persons);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
      <Divider horizontal>Employees</Divider>
      <CardGroup>
        {

         persons.map((person) => {
           return (
             <EmployeeCard key={person.id} person={person} />
           );
         })

        }

      </CardGroup>

    </div>
  );
};

export default App;
