import styled from 'styled-components';
import {
  Button,
} from 'semantic-ui-react';

/* eslint-disable import/prefer-default-export */
export const StyledCard = styled.div`
  padding: 10px;
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
