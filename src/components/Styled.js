import styled from 'styled-components';
import {
  Form, Button, Segment,
} from 'semantic-ui-react';

/* eslint-disable import/prefer-default-export */
export const StyledCard = styled.div`
  padding: 10px;
`;

export const StyledForm = styled(Form)`
  padding: 10vh 20vh;
  text-align: left;

  .ui.button {
    font-style: italic;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    float: right;
  }
`;

export const StyledSegment = styled(Segment)`
  .header {
    color: green;
    font-size: 45px;
    text-align: center;
    font-weight: bold;
  }

  .footer {
    font-size: 0.8em;
    font-weight: lighter;
    color: grey;
    font-style: italic;
  }
`;
