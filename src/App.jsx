import React from 'react';
import { Divider, CardGroup } from 'semantic-ui-react';
import EmployeeCard from './components/Card';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';


const data = [
  { fn: 'foo1', ln: 'bar1', id: 1 },
  { fn: 'foo2', ln: 'bar2', id: 2 },
  { fn: 'foo3', ln: 'bar3', id: 3 },
];

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Form />
    <Divider horizontal>Employees</Divider>
    <CardGroup>

      {
        data.map((person) => {
          return (
            <EmployeeCard key={person.id} person={person} />
          );
        })

      }

    </CardGroup>

  </div>
);

export default App;
