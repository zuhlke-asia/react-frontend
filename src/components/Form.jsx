import React, { useState } from 'react';
import { Form, FormGroup } from 'semantic-ui-react';
import { StyledForm } from './Styled';
import apiWrapper from '../API/apiwrapper';

const EmployeeForm = () => {
  const [fn, setfn] = useState('');
  const [ln, setln] = useState('');
  const [add, setAddress] = useState('');
  const [emailAdd, setEmail] = useState('');
  const [phoneNum, setPhone] = useState('');

  const mapper = {
    fnInput: setfn,
    lnInput: setln,
    addInput: setAddress,
    emailInput: setEmail,
    phoneInput: setPhone,
  };

  // to refactor out of Form component
  const handleSubmit = () => {
    const employee = {
      firstName: fn,
      lastName: ln,
      address: add,
      email: emailAdd,
      phone: phoneNum,
    };
    apiWrapper.post('/employee', employee)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputHandler = (evt, obj) => {
    const { value } = obj;
    mapper[evt.target.name](value);
  };


  return (
    <StyledForm>
      <Form onSubmit={handleSubmit}>
        <FormGroup inline widths="equal">
          <Form.Input fluid label="First name" name="fnInput" value={fn} onChange={inputHandler} placeholder="First name" />
          <Form.Input fluid label="Last name" name="lnInput" value={ln} onChange={inputHandler} placeholder="Last name" />
        </FormGroup>
        <Form.Field>
          <Form.Input fluid label="Address" name="addInput" value={add} onChange={inputHandler} placeholder="Address" />
        </Form.Field>
        <FormGroup inline widths="equal">
          <Form.Input label="Email Address" name="emailInput" value={emailAdd} onChange={inputHandler} placeholder="Email Address" />
          <Form.Input label="Phone Number" name="phoneInput" value={phoneNum} onChange={inputHandler} placeholder="Phone Number" />
        </FormGroup>
        <input type="submit" value="Submit" className="ui button fluid" />
      </Form>
    </StyledForm>

  );
};


export default EmployeeForm;
