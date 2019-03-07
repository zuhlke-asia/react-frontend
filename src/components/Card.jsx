import React from 'react';
// import { StyledCard } from './Styled';
import { Card, CardHeader, CardContent } from 'semantic-ui-react';

const EmployeeCard = (props) => {
  const { person } = props;
  const { fn, ln } = person;

  return (
    <Card>
      <CardHeader>{`${fn} ${ln}`}</CardHeader>
      <CardContent>
        <div>Address: </div>
        <div>Email: </div>
        <div>Phone: </div>

      </CardContent>

    </Card>

  );
};

export default EmployeeCard;
