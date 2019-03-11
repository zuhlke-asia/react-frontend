import styled from 'styled-components';
import {
  Button,
} from 'semantic-ui-react';

/* eslint-disable import/prefer-default-export */
export const StyledCard = styled.div`
  height: 30vh;
  width: 200px;
  border-style: solid;
  border-width: 1px;
`;

export const StyledForm = styled.div`
  padding: 30px;
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
