import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

const PlaceholderCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      </Card.Header>
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
          <Placeholder.Line length="medium" />
          <Placeholder.Line length="short" />
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
  </Card>
);

export default PlaceholderCard;
