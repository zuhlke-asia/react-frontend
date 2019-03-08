import React from 'react';
import NewEmployeeForm from './NewForm';
import FormWrapper from '../FormWrapper';

const NewEmployeeInput = () => {

  const onSubmit = values => console.log(JSON.stringify(values));

  const initialValues = {
    fnInput: '',
    lnInput: '',
  };

  return (
    <FormWrapper initialValues={initialValues} onSubmit={onSubmit}>
      <NewEmployeeForm />
    </FormWrapper>
  );
};

export default NewEmployeeInput;
