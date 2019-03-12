import React from 'react';
import { Form, FormGroup } from 'semantic-ui-react';
import { StyledForm } from './Styled';


const EmployeeForm = (props) => {
  const {
    employee, handleSubmit, inputHandler, formType,
  } = props;
  const {
    fn, ln, add, emailAdd, phoneNum,
  } = employee;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGroup inline widths="equal">
        <Form.Input fluid label="First Name" name="fnInput" value={fn} onChange={inputHandler} placeholder="First Name" />
        <Form.Input fluid label="Last Name" name="lnInput" value={ln} onChange={inputHandler} placeholder="Last Name" />
      </FormGroup>
      <Form.Field>
        <Form.Input fluid label="Address" name="addInput" value={add} onChange={inputHandler} placeholder="Address" />
      </Form.Field>
      <FormGroup inline widths="equal">
        <Form.Input label="Email Address" name="emailInput" value={emailAdd} onChange={inputHandler} placeholder="Email Address" />
        <Form.Input label="Phone Number" name="phoneInput" value={phoneNum} onChange={inputHandler} placeholder="Phone Number" />
      </FormGroup>
      {formType === 'new' &&
      <input type="submit" value="Submit" className="ui button fluid" />
      }
    </StyledForm>
  );
};


export default EmployeeForm;
