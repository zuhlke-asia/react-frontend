import React from 'react';
import {Form, FormGroup, Label } from 'semantic-ui-react';
import { StyledForm } from './Styled';

const EmployeeForm = () => { 
  return (
    <StyledForm>
      <Form>
        <FormGroup widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </FormGroup>
        <Form.Field>
          <label>Address</label>
          <input />
        </Form.Field>
       
       
        <FormGroup>
          <Form.Input fluid label="Email Address" placeholder="Email Address" />
          <Form.Input fluid label="Phone Number" placeholder="Phone Number" />
        </FormGroup>
      </Form>
    </StyledForm>

  );
};


export default EmployeeForm;
