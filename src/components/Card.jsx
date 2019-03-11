import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { StyledButton } from './Styled';
import { deleteEmployee } from '../API/APICalls';

const EmployeeCard = (props) => {
  const { person } = props;
  const {
    id, firstName, lastName, address, email, phone,
  } = person;

  const handleDelete = async () => {
    await deleteEmployee(id);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {`${firstName} ${lastName}`}
          <StyledButton icon onClick={handleDelete}>
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
