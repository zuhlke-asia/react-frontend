import React, { useState } from 'react';
import { Form, FormGroup } from 'semantic-ui-react';
import { StyledForm } from './Styled';

const EmployeeForm = () => {
  const [fn, setfn] = useState('');
  const [ln, setln] = useState('');
  const [add, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const mapper = {
    fnInput: setfn,
    lnInput: setln,
    addInput: setAddress,
    emailInput: setEmail,
    phoneInput: setPhone,
  };

  const handleSubmit = () => {
    const employee = {
      firstName: fn,
      lastName: ln,
      address: add,
      emailAddress: email,
      phoneNumber: phone,
    };

    console.log(JSON.stringify(employee));
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
          <Form.Input label="Email Address" name="emailInput" value={email} onChange={inputHandler} placeholder="Email Address" />
          <Form.Input label="Phone Number" name="phoneInput" value={phone} onChange={inputHandler} placeholder="Phone Number" />
        </FormGroup>
        <input type="submit" value="Submit" className="ui button fluid" />
      </Form>
    </StyledForm>

  );
};


export default EmployeeForm;
