import React from 'react';
import { Form, FormGroup } from 'semantic-ui-react';
import { StyledForm } from './Styled';


const EmployeeForm = (props) => {
  const { employee, handleSubmit, inputHandler } = props;
  const { fn, ln, add, emailAdd, phoneNum } = employee;

  return (
    <StyledForm onSubmit={handleSubmit} id="new-employee">
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
    </StyledForm>
  );
};


export default EmployeeForm;
