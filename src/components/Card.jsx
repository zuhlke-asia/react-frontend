import React from 'react';
import { Card, CardContent, CardHeader } from 'semantic-ui-react';

const EmployeeCard = (props) => {
  const { person } = props;
  const { firstName, lastName, address, email, phone } = person;

  return (
    <Card>
      <CardHeader>{`${firstName} ${lastName}`}</CardHeader>
      <CardContent>
        <div>Address: {address}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>

      </CardContent>

    </Card>

  );
};

export default EmployeeCard;
