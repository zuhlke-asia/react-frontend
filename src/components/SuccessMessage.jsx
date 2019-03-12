import React from 'react';
import { TransitionablePortal, Header, Icon } from 'semantic-ui-react';
import { StyledSegment } from './Styled';

const Message = (props) => {
  const { state, setState } = props;
  const handleOpen = () => { setState(true); };
  const handleClose = () => { setState(false); };

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
          You have successfully added an employee
        </p>
        <p className="footer">To close, simply click away</p>
      </StyledSegment>
    </TransitionablePortal>
  );
};

export default Message;
