import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

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
  <Form></Form>
    <hr />

    {
      data.map((person) => {
        return (
          <Card key={person.id} person={person} />
        );
      })

    }
  </div>
);

export default App;
