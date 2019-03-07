import React from 'react';
import { StyledCard } from './Styled';

const Card = (props) => {
  const { person } = props;
  const { fn, ln } = person;

  return (
    <StyledCard>
      <div>{`First Name: ${fn}`}</div>
      <div>{`Last Name: ${ln}`}</div>
      <div>Address: </div>
      <div>Email: </div>
      <div>Phone: </div>
    </StyledCard>
  );
};

export default Card;
