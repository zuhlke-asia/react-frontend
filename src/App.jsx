import React, { useState, useEffect } from 'react';
import { Card, Divider, Pagination } from 'semantic-ui-react';
import EmployeeCard from './components/Card';
import EmployeeForm from './components/EmployeeForm';
import Message from './components/SuccessMessage';
import logo from './logo.svg';
import './App.css';
import { getEmployees, addEmployee } from './API/APICalls';
import Sort from './components/Sort';
import { CentredDiv } from './components/Styled';
import PlaceholderCard from './components/PlaceholderCard';

const App = () => {
  // add new employee form attributes
  const [persons, setPersons] = useState([]);
  const [firstName, setfn] = useState('');
  const [lastName, setln] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const formType = 'new';

  // property for SuccessMessage component
  const [state, setState] = useState(false);
  const [actionType, setActionType] = useState('');

  // State hooks for pagination
  const [totalPages, setTotalPages] = useState(0);

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

  const getAllPersons = (page = 0, sort = 'createdAt', direction = 'asc') => {
    setPersons([]);
    getEmployees(page, sort, direction)
      .then((res) => {
        console.log('/getEmployee response:', res.data);
        setPersons(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .catch((error) => {
        setPersons([]);
        console.log(error);
      });
  };

  const handleSubmit = () => {
    console.log('in submit:', employee);
    setActionType('add');

    addEmployee(employee)
      .then((res) => {
        console.log('/addEmployee:', res);
        persons.push(res.data);
        setPersons(persons);
        console.log('push persons: ', persons);
        setState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePageChange = (event, data) => {
    getAllPersons(data.activePage - 1);
  };

  useEffect(() => {
    getAllPersons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Message state={state} setState={setState} actionType={actionType} />
      <EmployeeForm handleSubmit={handleSubmit} employee={employee} inputHandler={inputHandler} formType={formType} />
      <Divider horizontal>
        <Sort refresh={getAllPersons} />
      </Divider>
      <Card.Group>
        {persons.length !== 0
          ? persons.map(person => (
            <EmployeeCard refresh={getAllPersons} key={person.id} person={person} />
          ))
          : [...Array(16).keys()].map(() => <PlaceholderCard />)}
      </Card.Group>
      <CentredDiv>
        <Pagination defaultActivePage={1} onPageChange={handlePageChange} totalPages={totalPages} />
      </CentredDiv>
    </div>
  );
};

export default App;
