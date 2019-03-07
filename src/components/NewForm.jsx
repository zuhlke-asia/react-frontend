import React from 'react';
import { Form, FormGroup } from 'semantic-ui-react';

const NewEmployeeForm = ({ state, handleChange, handleSubmit }) => {

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup inline widths="equal">
        <Form.Input fluid label="First name" name="fnInput" value={state.values.fnInput} onChange={handleChange} placeholder="First name" />
        <Form.Input fluid label="Last name" name="lnInput" value={state.values.fnInput} onChange={handleChange} placeholder="Last name" />
      </FormGroup>
      <Form.Field>
        <Form.Input fluid label="Address" placeholder="Address" />
      </Form.Field>
      <FormGroup inline widths="equal">
        <Form.Input label="Email Address" placeholder="Email Address" />
        <Form.Input label="Phone Number" placeholder="Phone Number" />
      </FormGroup>
      <input type="submit" value="Submit" className="ui button fluid" />
      <pre>{JSON.stringify(state)}</pre>
    </Form>
  );
};


export default NewEmployeeForm;
