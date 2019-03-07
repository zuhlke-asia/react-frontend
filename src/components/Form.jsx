import React from 'react';
import { Form, FormGroup } from 'semantic-ui-react';
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
          <Form.Input fluid label="Address" placeholder="Address" />
        </Form.Field>
        <FormGroup widths="equal">
          <Form.Input label="Email Address" placeholder="Email Address" />
          <Form.Input label="Phone Number" placeholder="Phone Number" />
        </FormGroup>
        <Form.Button fluid>Submit</Form.Button>
      </Form>
    </StyledForm>

  );
};


export default EmployeeForm;
