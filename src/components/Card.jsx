import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { StyledButton } from './Styled';

const EmployeeCard = (props) => {
  const { person } = props;
  const {
    firstName, lastName, address, email, phone,
  } = person;

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {`${firstName} ${lastName}`}
          <StyledButton icon>
            <Icon name="trash alternate outline" />
          </StyledButton>
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="location arrow" />
            {address}
          </p>
          <p>
            <Icon name="envelope outline" />
            {email}
          </p>
          <p>
            <Icon name="phone" />
            {phone}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EmployeeCard;
