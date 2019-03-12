import React, { useState } from 'react';
import {
  Card, Icon, Form, Modal, Button,
} from 'semantic-ui-react';
import Message from './SuccessMessage';
import { StyledButton, StyledCard } from './Styled';
import { deleteEmployee, editEmployee } from '../API/APICalls';

const EmployeeCard = (props) => {
  const { person, refresh } = props;
  const {
    id, firstName, lastName, address, email, phone,
  } = person;

  // Form properties
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newAddress, setNewAddress] = useState(address);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);

  // property for SuccessMessage component
  const [state, setState] = useState(false);
  const [actionType, setActionType] = useState('');

  const mapper = {
    firstName: setNewFirstName,
    lastName: setNewLastName,
    address: setNewAddress,
    email: setNewEmail,
    phone: setNewPhone,
  };

  // Modal
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const showDeleteModal = () => {
    setDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteOpen(false);
  };

  const handleDelete = async () => {
    setActionType('delete');
    await deleteEmployee(id).then(() => {
      closeDeleteModal();
      refresh();
      setState(true);
    });
  };

  const showEditModal = () => {
    setEditOpen(true);
  };

  const closeEditModal = () => {
    setEditOpen(false);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewAddress(address);
    setNewEmail(email);
    setNewPhone(phone);
  };

  const handleEdit = async () => {
    setActionType('edit');
    await editEmployee(id, {
      firstName: newFirstName,
      lastName: newLastName,
      address: newAddress,
      email: newEmail,
      phone: newPhone,
    }).then(() => {
      closeEditModal();
      setState(true);
      refresh();
    });
  };

  const inputHandler = (evt, obj) => {
    const { value } = obj;
    mapper[evt.target.name](value);
  };

  return (
    <StyledCard>
      <Message state={state} setState={setState} actionType={actionType} />
      <Card>
        <Card.Content>
          <Card.Header>
            {`${firstName} ${lastName}`}
            <StyledButton icon onClick={showDeleteModal}>
              <Icon name="trash alternate outline" />
            </StyledButton>
            <StyledButton icon onClick={showEditModal}>
              <Icon name="pencil alternate" />
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
      <Modal size="mini" open={editOpen} onClose={closeEditModal} dimmer="blurring">
        <Modal.Header>
          Edit
          {' '}
          {firstName}
          {' '}
          {lastName}
        </Modal.Header>
        <Modal.Content>
          <Form id="edit-employee">
            <Form.Field>
              <Form.Input
                fluid
                label="First name"
                name="firstName"
                value={newFirstName}
                onChange={inputHandler}
                placeholder="First name"
              />
              <Form.Input
                fluid
                label="Last name"
                name="lastName"
                value={newLastName}
                onChange={inputHandler}
                placeholder="Last name"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid
                label="Address"
                name="address"
                value={newAddress}
                onChange={inputHandler}
                placeholder="Address"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Email Address"
                name="email"
                value={newEmail}
                onChange={inputHandler}
                placeholder="Email Address"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Phone Number"
                name="phone"
                value={newPhone}
                onChange={inputHandler}
                placeholder="Phone Number"
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={closeEditModal}>
            Cancel
          </Button>
          <Button
            positive
            onClick={handleEdit}
            icon="checkmark"
            labelPosition="right"
            content="Submit"
          />
        </Modal.Actions>
      </Modal>
      <Modal size="mini" open={deleteOpen} onClose={closeDeleteModal} dimmer="blurring">
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
          <Button negative onClick={closeDeleteModal}>
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
