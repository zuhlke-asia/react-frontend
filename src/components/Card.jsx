import React, { useState } from 'react';
import {
  Card, Icon, Modal, Button,
} from 'semantic-ui-react';
import { StyledButton, StyledCard } from './Styled';
import { deleteEmployee } from '../API/APICalls';

const EmployeeCard = (props) => {
  const { person, refresh } = props;
  const {
    id, firstName, lastName, address, email, phone,
  } = person;
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await deleteEmployee(id).then(() => {
      closeModal();
      refresh();
    });
  };

  return (
    <StyledCard>
      <Card>
        <Card.Content>
          <Card.Header>
            {`${firstName} ${lastName}`}
            <StyledButton icon onClick={showModal}>
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
      <Modal size="mini" open={open} onClose={closeModal} dimmer="blurring">
        <Modal.Header>
          Delete
          {' '}
          {firstName}
          {' '}
          {lastName}
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this card?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={closeModal}>
            No
          </Button>
          <Button
            positive
            onClick={handleDelete}
            icon="checkmark"
            labelPosition="right"
            content="Yes"
          />
        </Modal.Actions>
      </Modal>
    </StyledCard>
  );
};

export default EmployeeCard;
