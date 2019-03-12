import React from 'react';
import { TransitionablePortal, Header, Icon } from 'semantic-ui-react';
import { StyledSegment } from './Styled';

const Message = (props) => {
  const { state, setState, actionType } = props;
  const handleOpen = () => { setState(true); };
  const handleClose = () => { setState(false); };
  let msgContent = '';

  switch (actionType) {
    case 'add':
      msgContent = 'You have successfully added an employee';
      break;

    case 'edit':
      msgContent = 'Employee details edited';
      break;

    case 'delete':
      msgContent = 'You deleted an employee\'s details';
      break;

    default:
      msgContent = 'default message';
      break;
  }

  return (
    <TransitionablePortal
      closeOnTriggerClick
      onOpen={handleOpen}
      onClose={handleClose}
      openOnTriggerClick
      open={state}
    >
      <StyledSegment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
        <Header>
        Success!
          <Icon name="check" />
        </Header>
        <p>
          {msgContent}
        </p>
        <p className="footer">To close, simply click away</p>
      </StyledSegment>
    </TransitionablePortal>
  );
};

export default Message;
